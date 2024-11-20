import "@/globals.css";
import { Inter } from "next/font/google";
import JotaiProvider from "@/utils/provider";
import EmotionProvider from "@/utils/emotion";

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
      <EmotionProvider>
        <JotaiProvider>
          <body className={inter.className}>
            <main className="flex flex-col min-h-screen p-24 gap-6 bg-stone-950 items-center text-stone-200">
              {children}
            </main>
          </body>
        </JotaiProvider>
      </EmotionProvider>
    </html>
  );
}
