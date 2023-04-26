import { Book } from "@/utils";
import { IconCalendarEvent, IconNews } from "@tabler/icons-react";
import BookItem from "./BookItem";

export default function BookList({ books }: { books: Book[] }) {
  return (
    <ol className="flex flex-col gap-2 w-3/4 justify-stretch">
      {books.map((book) => (
        <BookItem book={book} key={book.id} />
      ))}
    </ol>
  );
}
