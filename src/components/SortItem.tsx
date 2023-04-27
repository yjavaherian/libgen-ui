"use client";
import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { SortItem, sortListAtom } from "@/store";
import {
  IconSortAscending,
  IconSortDescending,
  IconX,
} from "@tabler/icons-react";
import { useSetAtom } from "jotai";

export default function SortItem({ sortItem }: { sortItem: SortItem }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: sortItem.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  const setSortList = useSetAtom(sortListAtom);

  const changeOrder = () => {
    const newOrder = sortItem.order == "desc" ? "asc" : "desc";
    setSortList((sortList) =>
      sortList.map((s) => (s == sortItem ? { ...s, order: newOrder } : s))
    );
  };
  const removeItem = () => {
    setSortList((sortList) => sortList.filter((s) => s.id != sortItem.id));
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="flex flex-row gap-1 items-center rounded-xl
    bg-amber-500 bg-opacity-70 font-bold 
     uppercase text-sm p-1 select-none"
    >
      <button onClick={removeItem}>
        <IconX size={14} stroke={3} className="hover:stroke-stone-800" />
      </button>
      <span {...attributes} {...listeners}>
        {sortItem.field}
      </span>
      <button onClick={changeOrder}>
        {sortItem.order == "asc" && (
          <IconSortAscending size={20} className="hover:stroke-stone-800" />
        )}
        {sortItem.order == "desc" && (
          <IconSortDescending size={20} className="hover:stroke-stone-800" />
        )}
      </button>
    </div>
  );
}
