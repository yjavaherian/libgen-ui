"use client";
import * as _ from "lodash";
import { useAtomValue } from "jotai";
import { Book } from "@/utils";
import { sortListAtom } from "@/store";
import BookItem from "./BookItem";
import SortBox from "./SortBox";
import { IconHash } from "@tabler/icons-react";

export default function BookList({ books }: { books: Book[] }) {
  const sortList = useAtomValue(sortListAtom);
  if (books.length == 0) {
    return (
      <div className="font-semibold ">
        <span className="text-4xl">😔</span> No results were found for your
        query...
      </div>
    );
  }
  const sortedBooks = _.orderBy(
    books,
    sortList.map((s) => s.field),
    sortList.map((s) => s.order)
  );
  return (
    <>
      <div className="w-1/2 ">
        <SortBox />
      </div>
      <div className=" w-2/3 ">
        <span className="flex flex-row items-center ml-1 mb-2 ">
          Books found
          <IconHash size={16} className="ml-1" />
          {books.length}
        </span>
        <ol className="flex flex-col gap-2 justify-stretch">
          {sortedBooks.map((book) => (
            <BookItem book={book} key={book.id} />
          ))}
        </ol>
      </div>
    </>
  );
}
