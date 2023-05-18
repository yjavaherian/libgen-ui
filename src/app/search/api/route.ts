import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { Book, isWhitespace, myParseInt, parseEdition } from "@/utils/utils";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const query = searchParams.get("q");
  if (!query || isWhitespace(query))
    throw Error("please provide a valid query search parameter!");
  console.log("calling prisma📅");

  const data = await prisma.books_query.findMany({
    where: {
      AND: query
        .trim()
        .split(" ")
        .map((word) => ({ bagOfWords: { contains: word } })),
    },
    include: { book: true },
  });

  const books: Book[] = data.map(({ book }) => ({
    ...book,
    pages: myParseInt(book.pages),
    year: myParseInt(book.year),
    edition: parseEdition(book.edition),
    fileSize: Number(book.fileSize),
  }));

  return NextResponse.json({ books });
}
