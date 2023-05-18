"use client";
import BookList from "@/components/book/BookList";
import { Book, isWhitespace } from "@/utils/utils";
import useSWR from "swr";
import Loading from "./loading";

const fetcher = (input: RequestInfo | URL, init?: RequestInit) =>
  fetch(input, init).then((res) => res.json());

export default async function SearchResults({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const query = searchParams["q"];
  if (query == undefined || isWhitespace(query))
    throw Error("Please provide a valid search query");
  try {
    const { data, error, isLoading } = useSWR<{
      books: Book[];
      queryTime: number;
    }>(`/search/api?q=${encodeURIComponent(query)}`, fetcher);

    if (error) throw Error(error);
    if (isLoading) return <Loading />;
    return (
      <BookList
        books={data?.books ?? []}
        queryTime={data?.queryTime ?? 0}
      ></BookList>
    );
  } catch (error) {
    throw Error(
      "An Error occurred while communicating with libgen.is make sure you have access to this site."
    );
  }
}
