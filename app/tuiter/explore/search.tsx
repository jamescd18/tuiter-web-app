import { SearchIcon } from "lucide-react";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function Search() {
  return (
    <label
      className={cn(
        "flex flex-row items-center rounded-full bg-slate-100 m-4 w-full"
      )}
    >
      <SearchIcon
        className={cn("pointer-events-none absolute translate-x-2 py-1")}
        color="gray"
      />
      <Input
        className={cn(
          "rounded-full bg-slate-100 border-0 focus:outline-none appearance-none pl-10 placeholder-gray"
        )}
        type="search"
        placeholder="Search Tuiter"
      />
    </label>
  );
}
