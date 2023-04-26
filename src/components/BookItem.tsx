import { Book } from "@/utils";
import { IconCalendarEvent, IconNews } from "@tabler/icons-react";

export default function BookItem({ book }: { book: Book }) {
  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-pink-300 rounded-lg blur-sm opacity-0 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
      <a
        className="relative rounded-lg bg-stone-800 p-2 block"
        href={`http://library.lol/main/${book.md5}`}
        target="_blank"
      >
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-2">
            <span className="rounded bg-stone-600 px-1">{book.extension}</span>
            <span className="rounded bg-stone-600 px-1">
              {book.filesize} MB
            </span>
          </div>
          <div className="flex flex-row gap-2">
            {!isNaN(book.year) && (
              <span className="rounded bg-stone-600 px-1 flex flex-row items-center">
                {book.year} <IconCalendarEvent size={16} />
              </span>
            )}
            {!isNaN(book.pages) && (
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
      </a>
    </div>
  );
}
