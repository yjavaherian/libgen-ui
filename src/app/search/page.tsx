import { load } from "cheerio";
import axios from "axios";
import BookList from "./BookList";

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

async function getIDS(query: string) {
  let ids: number[] = [];
  let page = 1;
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
  return ids;
}

async function getBooks(ids: number[]): Promise<Book[]> {
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
      id: parseInt(datum.id),
      pages: parseInt(datum.pages),
      filesize: Number((parseInt(datum.filesize) / (1024 * 1024)).toFixed(2)),
      year: parseInt(datum.year),
    })
  );
}

export default async function SearchResults({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const books = await getBooks(await getIDS(searchParams["q"] ?? ""));

  return <BookList books={books}></BookList>;
}
