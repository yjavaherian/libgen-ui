import BookList from "@/components/BookList";
import { getBooks, getIDS } from "@/utils";

export default async function SearchResults({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const books = await getBooks(await getIDS(searchParams["q"] ?? ""));
  return <BookList books={books}></BookList>;
}
