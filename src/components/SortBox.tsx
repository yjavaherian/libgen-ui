"use client";
import {
  nextSortItemIdAtom,
  remainedSortOptionsAtom,
  sortListAtom,
} from "@/store";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import { restrictToHorizontalAxis } from "@dnd-kit/modifiers";
import { Menu } from "@mantine/core";
import { useAtom, useAtomValue } from "jotai";
import SortItem from "./SortItem";
import { IconArrowsSort, IconPlus } from "@tabler/icons-react";
import { Book } from "@/utils";

export default function SortBox() {
  const [items, setItems] = useAtom(sortListAtom);
  const sortOptions = useAtomValue(remainedSortOptionsAtom);
  const newSortItemId = useAtomValue(nextSortItemIdAtom);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    const oldIndex = items.findIndex((s) => s.id == active.id);
    const newIndex = items.findIndex((s) => s.id == over?.id);
    setItems(arrayMove(items, oldIndex, newIndex));
  };

  const addSortItem = (field: keyof Book) =>
    setItems(items.concat({ field, id: newSortItemId, order: "desc" }));

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      modifiers={[restrictToHorizontalAxis]}
    >
      <div className="flex flex-row items-center gap-2">
        <SortableContext items={items} strategy={horizontalListSortingStrategy}>
          {items.map((item) => (
            <SortItem key={item.id} sortItem={item} />
          ))}
        </SortableContext>
        {sortOptions.length > 0 && (
          <Menu width={200} shadow="md">
            <Menu.Target>
              <button className="flex flex-row items-center gap-1 rounded-md p-1 hover:bg-opacity-50 bg-opacity-0 bg-stone-600">
                <IconPlus size={16} />
                Add sort
              </button>
            </Menu.Target>
            <Menu.Dropdown>
              {sortOptions.map((option) => (
                <Menu.Item
                  icon={<IconArrowsSort size={10} />}
                  onClick={() => addSortItem(option)}
                  key={option}
                >
                  {option}
                </Menu.Item>
              ))}
            </Menu.Dropdown>
          </Menu>
        )}
      </div>
    </DndContext>
  );
}
