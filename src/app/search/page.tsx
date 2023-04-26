import BookList from "@/components/BookList";
import { getBooks, getIDS, isWhitespace } from "@/utils";

export default async function SearchResults({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const query = searchParams["q"];
  if (query == undefined || isWhitespace(query))
    throw Error("Please provide a valid search query");
  try {
    const books = await getBooks(await getIDS(query));
    return <BookList books={books}></BookList>;
  } catch (error) {
    throw Error(
      "An Error occurred while communicating with libgen.is make sure you have access to this site."
    );
  }
}
