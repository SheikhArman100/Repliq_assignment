"use client";
import { SearchIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation.js";
import React from "react";
import { useDebouncedCallback } from "use-debounce";
import Drawer from "./Drawer.js";
import Drawer2 from "./Drawer2.js";

const Search = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const handleSearch = useDebouncedCallback((value) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("query", value);
    } else {
      params.delete("query");
    }
    router.replace(`${pathname}?${params.toString()}`);
  }, 300);
  return (
    <div className="flex items-center  gap-x-4 py-4 px-8 shadow-md shadow-gray-500">
      
      <Drawer2 />
      
      <SearchIcon className="size-8" />
      <input
        className="flex-1 text-base"
        type="text"
        placeholder="Search product"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get("query")?.toString()}
      />
    </div>
  );
};

export default Search;
