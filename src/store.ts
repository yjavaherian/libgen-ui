import { atomWithStorage } from "jotai/utils";
import { Book } from "./utils";
import { atom } from "jotai";

export type SortItem = {
  field: keyof Book;
  order: "asc" | "desc";
  id: number;
};

export const sortListAtom = atomWithStorage<SortItem[]>("sortList", [
  { field: "author", order: "asc", id: 0 },
  { field: "publisher", order: "asc", id: 1 },
]);

const allSortOptions: (keyof Book)[] = [
  "year",
  "extension",
  "author",
  "filesize",
  "title",
  "publisher",
  "pages",
  "language",
];

export const remainedSortOptionsAtom = atom((get) => {
  const activeSortOptions = get(sortListAtom).map((x) => x.field);
  return allSortOptions.filter((option) => !activeSortOptions.includes(option));
});

export const nextSortItemIdAtom = atom((get) => {
  const sortList = get(sortListAtom);
  return sortList.length + 1;
});
