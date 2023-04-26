import SearchBar from "@/components/SearchBar";
import "@/globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LibgenUI",
  description: "a modern open-source UI for library genesis",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center p-24 bg-stone-950 text-stone-200 gap-8">
          <h1 className="text-5xl font-extrabold ">Libgen UI</h1>
          <p className="text-sm">a modern UI for library genesis</p>
          <SearchBar />
          {children}
        </main>
      </body>
    </html>
  );
}
