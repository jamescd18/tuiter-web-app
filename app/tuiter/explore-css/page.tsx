import { Search } from "./search";
import { cn } from "@/lib/utils";
import { Settings } from "lucide-react";
import NavRow from "./nav-row";
import ImgBanner from "./img-banner";
import Trending from "./trending";

export default function ExploreCSS() {
  return (
    <div className={cn("flex flex-col")}>
      <div className={cn("flex flex-row items-center")}>
        <Search />
        <Settings className={cn("ml-5 mr-3")} color="gray" />
      </div>
      <NavRow />
      <ImgBanner />
      <Trending />
    </div>
  );
}
