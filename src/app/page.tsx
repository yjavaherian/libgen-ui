import SearchBar from "@/components/search/SearchBar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href={"/"} className="text-5xl font-extrabold">
        Libgen UI
      </Link>
      <p className="text-sm">a modern UI for library genesis</p>
      <SearchBar />
      <div className="text-bold text-2xl ">
        Hmm... use the ☝️ searchbox to search library genesis database
      </div>
    </>
  );
}
