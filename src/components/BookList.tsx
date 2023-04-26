import { Book } from "@/utils";
import { IconCalendarEvent, IconNews } from "@tabler/icons-react";
import BookItem from "./BookItem";

export default function BookList({ books }: { books: Book[] }) {
  if (books.length == 0) {
    return (
      <div className="font-semibold ">
        <span className="text-4xl">😔</span> No results were found for your
        query...
      </div>
    );
  }
  return (
    <ol className="flex flex-col gap-2 w-3/4 justify-stretch">
      {books.map((book) => (
        <BookItem book={book} key={book.id} />
      ))}
    </ol>
  );
}
