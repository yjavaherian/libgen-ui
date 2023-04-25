import { Book } from "./page";
import { IconCalendarEvent, IconNews, IconTeapot } from "@tabler/icons-react";

export default function BookList({ books }: { books: Book[] }) {
  return (
    <ol className="flex flex-col gap-2 w-3/4">
      {books.map((book) => {
        return (
          <li
            key={book.id}
            className="flex flex-col rounded-lg bg-stone-800 px-4 py-2 gap-1"
          >
            <div className="flex flex-row justify-between">
              <div className="flex flex-row gap-2">
                <span className="rounded bg-stone-600 px-1">
                  {book.extension}
                </span>
                <span className="rounded bg-stone-600 px-1">
                  {book.filesize} MB
                </span>
              </div>
              <div className="flex flex-row gap-2">
                <span className="rounded bg-stone-600 px-1 flex flex-row items-center">
                  {book.year} <IconCalendarEvent size={16} />
                </span>
                <span className="rounded bg-stone-600 px-1 flex flex-row items-center">
                  {book.pages} <IconNews size={16} />
                </span>
                <span className="rounded bg-stone-600 px-1">
                  {book.language}
                </span>
              </div>
            </div>
            <div className="flex flex-row font-bold">
              <a
                className="grow hover:underline"
                target="_blank"
                href={`http://library.lol/main/${book.md5}`}
              >
                {book.title}
              </a>
              <span>{book.edition}</span>
            </div>
            <div className="flex flex-row justify-between text-sm">
              <span>{book.author}</span>
              <span>{book.publisher}</span>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
