import SearchBar from "@/components/SearchBar";
import "@/globals.css";
import { Inter } from "next/font/google";
import JotaiProvider from "./provider";
import EmotionProvider from "@/utils/emotion";
import FilterBox from "@/components/FilterBox";

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
        <main className="flex flex-col min-h-screen p-24 gap-6 bg-stone-950 items-center text-stone-200">
          <h1 className="text-5xl font-extrabold">Libgen UI</h1>
          <p className="text-sm">a modern UI for library genesis</p>
          <EmotionProvider>
            <JotaiProvider>
              <SearchBar />
              {children}
            </JotaiProvider>
          </EmotionProvider>
        </main>
      </body>
    </html>
  );
}
