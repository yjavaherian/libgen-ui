"use client";
import {
  Filter,
  allNumericalFilterOptions,
  allStringFilterOptions,
  filterListAtom,
  nextFilterItemIdAtom,
} from "@/utils/store";
import { Button, Popover, Select, TextInput } from "@mantine/core";
import { useAtom, useAtomValue } from "jotai";
import { IconMathGreater, IconMathLower, IconPlus } from "@tabler/icons-react";
import FilterItem from "./FilterItem";
import { useRef, useState } from "react";
import { Book } from "@/utils/utils";

export default function FilterBox() {
  const [items, setItems] = useAtom(filterListAtom);
  const addFilterItem = (filter: Filter) => setItems(items.concat(filter));
  const [selValue, setSelValue] = useState<string>(
    allNumericalFilterOptions[0]
  );
  const nextId = useAtomValue(nextFilterItemIdAtom);
  const ref1 = useRef<HTMLInputElement>(null);
  const ref2 = useRef<HTMLInputElement>(null);
  const ref3 = useRef<HTMLInputElement>(null);
  const ref4 = useRef<HTMLInputElement>(null);
  return (
    <div className="flex flex-row items-center gap-2 pt-2">
      <Popover width={250} shadow="md" trapFocus>
        <Popover.Target>
          <button className="flex flex-row items-center gap-1 rounded-md p-1 hover:bg-opacity-50 bg-opacity-0 bg-stone-600">
            <IconPlus size={16} />
            Add filter
          </button>
        </Popover.Target>
        <Popover.Dropdown className="flex flex-col gap-1">
          <Select
            placeholder="property"
            data={allNumericalFilterOptions
              .concat(allStringFilterOptions)
              .map((o) => ({ value: o, label: o }))}
            value={selValue}
            onChange={(x) => setSelValue(x ?? "")}
          />
          <div className="flex flex-row gap-1">
            <TextInput
              icon={<IconMathLower size={10} />}
              placeholder="lower"
              ref={ref1}
              disabled={allStringFilterOptions.includes(selValue)}
            />
            <TextInput
              icon={<IconMathGreater size={10} />}
              placeholder="upper"
              ref={ref2}
              disabled={allStringFilterOptions.includes(selValue)}
            />
          </div>
          <div className="flex flex-row gap-1">
            <TextInput
              placeholder="includes"
              ref={ref3}
              disabled={allNumericalFilterOptions.includes(selValue)}
            />
            <TextInput
              placeholder="includes not"
              ref={ref4}
              disabled={allNumericalFilterOptions.includes(selValue)}
            />
          </div>
          <Button
            disabled={selValue == undefined}
            onClick={() => {
              if (allNumericalFilterOptions.includes(selValue))
                addFilterItem({
                  field: selValue as keyof Book,
                  id: nextId,
                  lower: parseInt(ref1.current?.value ?? ""),
                  upper: parseInt(ref2.current?.value ?? ""),
                });
              else
                addFilterItem({
                  field: selValue as keyof Book,
                  id: nextId,
                  includes: ref3.current?.value,
                  includesNot: ref4.current?.value,
                });
            }}
          >
            <IconPlus size={18} stroke={3} />
          </Button>
        </Popover.Dropdown>
      </Popover>
      {items.map((f) => (
        <FilterItem key={f.id} filter={f} />
      ))}
    </div>
  );
}
