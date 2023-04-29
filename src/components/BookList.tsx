"use client";
import * as _ from "lodash";
import { useAtomValue } from "jotai";
import {
  Book,
  fieldIncludes,
  fieldIncludesNot,
  fieldIsGreater,
  fieldIsSmaller,
} from "@/utils/utils";
import { filterListAtom, sortListAtom } from "@/utils/store";
import BookItem from "./BookItem";
import SortBox from "./SortBox";
import { IconHash } from "@tabler/icons-react";
import FilterBox from "./FilterBox";
import { Divider } from "@mantine/core";

export default function BookList({ books }: { books: Book[] }) {
  const sortList = useAtomValue(sortListAtom);
  const filterList = useAtomValue(filterListAtom);
  if (books.length == 0) {
    return (
      <div className="font-semibold ">
        <span className="text-4xl">😔</span> No results were found for your
        query...
      </div>
    );
  }
  const filteredBooks = _.filter(books, (book) =>
    filterList
      .map((filter) => {
        const field = book[filter.field];
        if ("includes" in filter)
          return (
            fieldIncludes(field, filter.includes) &&
            fieldIncludesNot(field, filter.includesNot)
          );
        else if ("lower" in filter)
          return (
            fieldIsGreater(field, filter.lower) &&
            fieldIsSmaller(field, filter.upper)
          );
        else return false;
      })
      .every((x) => x)
  );
  const sortedBooks = _.orderBy(
    filteredBooks,
    sortList.map((s) => s.field),
    sortList.map((s) => s.order)
  );
  return (
    <>
      <div className="w-1/2 flex flex-col gap-2 divide-y-2 divide-stone-500 ">
        <SortBox />
        <FilterBox />
      </div>
      <div className=" w-2/3 ">
        <span className="inline-flex flex-row items-center ml-1 mb-2 ">
          Books found
          <IconHash size={16} className="ml-1 text-stone-400" />
          {books.length}
        </span>
        <span className="ml-6 inline-flex flex-row items-center mb-2 ">
          After Filtration
          <IconHash size={16} className="ml-1 text-stone-400" />
          {filteredBooks.length}
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
