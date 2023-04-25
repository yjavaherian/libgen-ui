import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="text-bold text-4xl">
      Hmm... use the ☝️ searchbox to search library genesis database
    </div>
  );
}
