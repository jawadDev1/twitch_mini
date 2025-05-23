"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { SearchIcon, X } from "lucide-react";
import { useRouter } from "next/navigation";
import qs from "query-string";
import React, { useState } from "react";

const Search = () => {
  const router = useRouter();
  const [value, setValue] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!value) return;

    const url = qs.stringifyUrl(
      {
        url: "/search",
        query: { term: value },
      },
      { skipEmptyString: true }
    );

    router.push(url);
  };

  const handleClearSearch = () => {
    setValue("");
  };

  return (
    <form
      onSubmit={onSubmit}
      className="relative w-full lg:w-[400px]  flex items-center"
    >
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search here ...."
        className="rounded-r-none focus-visible:right-0 focus-visible:ring-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
      />
      {value && (
        <X
          onClick={handleClearSearch}
          className="absolute top-2.5 right-14 size-5 text-muted-foreground cursor-pointer hover:opacity-75  transition"
        />
      )}

      <Button
        type="submit"
        variant={"secondary"}
        size={"sm"}
        className="rounded-l-none"
      >
        <SearchIcon className="size-5 text-muted-foreground" />
      </Button>
    </form>
  );
};

export default Search;
