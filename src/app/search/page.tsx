"use client";
import BookList from "@/components/book/BookList";
import { Book, isWhitespace } from "@/utils/utils";
import useSWR from "swr";
import Loading from "./loading";
import SearchBar from "@/components/search/SearchBar";

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
    }>(`/search/api?q=${encodeURIComponent(query)}`, fetcher, {
      refreshInterval: 1000 * 60 * 60,
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnMount: false,
      revalidateOnReconnect: false,
    });

    if (error) throw Error(error);
    if (isLoading) return <Loading />;
    return (
      <>
        <SearchBar />
        <BookList
          books={data?.books ?? []}
          queryTime={data?.queryTime ?? 0}
        ></BookList>
      </>
    );
  } catch (error) {
    throw Error(
      "An Error occurred while communicating with libgen.is make sure you have access to this site."
    );
  }
}
