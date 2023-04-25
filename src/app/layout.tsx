import SearchBar from "./SearchBar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LibgenUI",
  description: "a simple NextJS+Tailwind app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
