import Link from "@blocks/link";
import { Search } from "./search";
import { cn } from "@/lib/utils";
import { Settings } from "lucide-react";
import NavRow from "./nav-row";

export default function ExploreCSS() {
  return (
    <div className={cn("flex flex-col")}>
      <div className={cn("flex flex-row items-center")}>
        <Search />
        <Settings className={cn("ml-5 mr-3")} color="gray" />
      </div>
      <NavRow />
    </div>
  );
}
