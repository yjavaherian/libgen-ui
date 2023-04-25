"use client";

import { IconSearch } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const onSearch = (event: React.FormEvent) => {
    event.preventDefault();
    router.push(`/search?q=${encodeURI(query)}`);
  };
  return (
    <form className="flex justify-center w-1/2 gap-4" onSubmit={onSearch}>
      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Book name..."
        className="flex-1 rounded-xl bg-stone-800 px-4 py-2 "
      ></input>
      <button
        type="submit"
        className="bg-stone-700 rounded-xl px-4 hover:bg-stone-800"
      >
        <IconSearch />
      </button>
    </form>
  );
}
