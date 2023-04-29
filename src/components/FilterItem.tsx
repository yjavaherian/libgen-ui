"use client";
import { IconFilter, IconX } from "@tabler/icons-react";
import { useSetAtom } from "jotai";
import { Filter, filterListAtom } from "@/utils/store";

export default function FilterItem({ filter }: { filter: Filter }) {
  const setFilterList = useSetAtom(filterListAtom);
  const removeItem = () => {
    setFilterList((filterList) => filterList.filter((f) => f != filter));
  };

  return (
    <div
      className="flex flex-row gap-1 items-center rounded-xl
    bg-amber-500 bg-opacity-70 font-bold 
     uppercase text-sm p-1 select-none"
    >
      <button onClick={removeItem}>
        <IconX size={14} stroke={3} className="hover:stroke-stone-800" />
      </button>
      {filter.field}
      <IconFilter size={16} />
    </div>
  );
}
