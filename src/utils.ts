import { load } from "cheerio";
import axios from "axios";

export type Book = {
  id: number;
  title: string;
  author: string;
  publisher: string;
  pages: number;
  language: string;
  filesize: number;
  extension: string;
  md5: string;
  year: number;
  edition: string;
};

function getOrdinalSuffix(num: number): string {
  const lastDigit = num % 10;
  const secondLastDigit = Math.floor((num % 100) / 10);

  if (secondLastDigit === 1) {
    return `${num}th edition`;
  } else if (lastDigit === 1) {
    return `${num}st edition`;
  } else if (lastDigit === 2) {
    return `${num}nd edition`;
  } else if (lastDigit === 3) {
    return `${num}rd edition`;
  } else {
    return `${num}th edition`;
  }
}

export async function getIDS(query: string) {
  let ids: number[] = [];
  let page = 1;
  try {
    while (true) {
      const { data } = await axios.get("https://libgen.is/search.php", {
        params: {
          req: query,
          page,
          res: 100,
        },
      });
      const $ = load(data);
      const rows = $(".c > tbody > tr > td:nth-child(1)").toArray();
      rows.shift();
      ids = ids.concat(rows.map((e) => parseInt($(e).text())));
      if (rows.length == 100) page++;
      else break;
    }
  } catch (error) {
    throw error;
  }
  return ids;
}
function myParseInt(str: string) {
  return parseInt(str.match(/\d+/)?.at(0) ?? "", 10);
}

export async function getBooks(ids: number[]): Promise<Book[]> {
  try {
    const { data } = await axios.get("https://libgen.is/json.php", {
      params: {
        ids: ids.join(","),
        fields:
          "id,title,author,publisher,pages,language,filesize,extension,md5,year,edition",
      },
    });
    return data.map(
      (datum: any): Book => ({
        ...datum,
        edition:
          !isNaN(myParseInt(datum.edition)) &&
          getOrdinalSuffix(myParseInt(datum.edition)).startsWith(datum.edition)
            ? getOrdinalSuffix(myParseInt(datum.edition))
            : datum.edition,
        id: myParseInt(datum.id),
        pages: myParseInt(datum.pages),
        filesize: Number(
          (myParseInt(datum.filesize) / (1024 * 1024)).toFixed(2)
        ),
        year: myParseInt(datum.year),
      })
    );
  } catch (error) {
    throw error;
  }
}
