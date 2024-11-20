import { IconCalendarEvent, IconNews } from "@tabler/icons-react";

export default async function BookPage({ params }: { params: { id: string } }) {
  const book = await prisma.updated.findUniqueOrThrow({
    where: { ID: Number(params.id) },
  });

  return (
    <>
      <div className="flex flex-col justify-between">
        <div className="flex flex-row gap-2">
          <span className="rounded bg-stone-600 px-1">{book.Extension}</span>
          <span className="rounded bg-stone-600 px-1">
            {Number(book.Filesize)} MB
          </span>
        </div>
        <div className="flex flex-row gap-2">
          {book.Year && (
            <span className="rounded bg-stone-600 px-1 flex flex-row items-center">
              {book.Year} <IconCalendarEvent size={16} />
            </span>
          )}
          {book.Pages && (
            <span className="rounded bg-stone-600 px-1 flex flex-row items-center">
              {book.Pages} <IconNews size={16} />
            </span>
          )}
          {book.Language && (
            <span className="rounded bg-stone-600 px-1">{book.Language}</span>
          )}
        </div>
      </div>
      <div className="flex flex-row font-bold">
        <span className="grow">{book.Title}</span>
        <span>{book.Edition}</span>
      </div>
      <div className="flex flex-row justify-between text-sm">
        <span>{book.Author}</span>
        <span>{book.Publisher}</span>
      </div>
    </>
  );
}
