import { IconCalendarEvent, IconNews } from "@tabler/icons-react";

export default async function BookPage({ params }: { params: { id: string } }) {
  const book = await prisma.books.findUniqueOrThrow({
    where: { id: Number(params.id) },
  });

  return (
    <>
      <div className="flex flex-col justify-between">
        <div className="flex flex-row gap-2">
          <span className="rounded bg-stone-600 px-1">{book.extension}</span>
          <span className="rounded bg-stone-600 px-1">
            {Number(book.fileSize)} MB
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
    </>
  );
}
