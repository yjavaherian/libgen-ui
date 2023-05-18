import { atomWithStorage } from "jotai/utils";
import { Book } from "./utils";
import { atom } from "jotai";

export type SortItem = {
  field: keyof Book;
  order: "asc" | "desc";
  id: number;
};

export type NumericalFilter = {
  field: keyof Book;
  lower?: number;
  upper?: number;
  id: number;
};

export type StringFilter = {
  field: keyof Book;
  includes?: string;
  includesNot?: string;
  id: number;
};
export const allNumericalFilterOptions = ["pages", "filesize", "year"];
export const allStringFilterOptions = [
  "title",
  "author",
  "publisher",
  "language",
  "extension",
  "edition",
];

export type Filter = StringFilter | NumericalFilter;

export const sortListAtom = atomWithStorage<SortItem[]>("sortList", []);

export const filterListAtom = atomWithStorage<Filter[]>("filterList", []);

const allSortOptions: (keyof Book)[] = [
  "year",
  "extension",
  "author",
  "fileSize",
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

export const nextFilterItemIdAtom = atom((get) => {
  const filterList = get(filterListAtom);
  return filterList.length + 1;
});
