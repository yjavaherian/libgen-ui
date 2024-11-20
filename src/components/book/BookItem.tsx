import { Book } from "@/utils/utils";
import { IconCalendarEvent, IconNews } from "@tabler/icons-react";
import Link from "next/link";

export default function BookItem({ book }: { book: Book }) {
  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-pink-300 rounded-lg blur-sm opacity-0 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
      <Link
        className="relative rounded-lg bg-stone-800 p-2 block"
        href={`/books/${book.id}`}
        target="_blank"
      >
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-2">
            <span className="rounded bg-stone-600 px-1">{book.extension}</span>
            <span className="rounded bg-stone-600 px-1">
              {book.fileSize} MB
            </span>
          </div>
          <div className="flex flex-row gap-2">
            {book.year && (
              <span className="rounded bg-stone-600 px-1 flex flex-row items-center">
                {book.year} <IconCalendarEvent size={16} />
              </span>
            )}
            {book.pages && (
              <span className="rounded bg-stone-600 px-1 flex flex-row items-center">
                {book.pages} <IconNews size={16} />
              </span>
            )}
            {book.language && (
              <span className="rounded bg-stone-600 px-1">{book.language}</span>
            )}
          </div>
        </div>
        <div className="flex flex-row font-bold">
          <span className="grow">{book.title}</span>
          <span>{book.edition}</span>
        </div>
        <div className="flex flex-row justify-between text-sm">
          <span>{book.author}</span>
          <span>{book.publisher}</span>
        </div>
      </Link>
    </div>
  );
}
