"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { IconArrowBack } from "@tabler/icons-react";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const onSearch = (event: React.FormEvent) => {
    event.preventDefault();
    router.push(`/search?q=${encodeURI(query)}`);
  };
  return (
    <form className="w-1/2 relative group" onSubmit={onSearch}>
      <div className="absolute -inset-0.5  bg-pink-300 rounded-xl blur-sm opacity-0 group-focus-within:opacity-50 group-focus-within:duration-200 transition duration-1000 animate-tilt"></div>
      <div className="relative w-full rounded-xl bg-stone-800 px-4 py-2 flex flex-row items-center">
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Book name..."
          className="grow bg-stone-800 focus:outline-none"
        ></input>
        <IconArrowBack size={22} />
      </div>
    </form>
  );
}
