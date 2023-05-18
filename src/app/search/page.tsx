"use client";
import BookList from "@/components/book/BookList";
import { isWhitespace } from "@/utils/utils";

export default async function SearchResults({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const query = searchParams["q"];
  if (query == undefined || isWhitespace(query))
    throw Error("Please provide a valid search query");
  try {
    const start = performance.now();
    const { books } = await fetch(`/search/api?q=${encodeURI(query)}`).then(
      (d) => d.json()
    );

    return (
      <BookList books={books} queryTime={performance.now() - start}></BookList>
    );
  } catch (error) {
    throw Error(
      "An Error occurred while communicating with libgen.is make sure you have access to this site."
    );
  }
}
