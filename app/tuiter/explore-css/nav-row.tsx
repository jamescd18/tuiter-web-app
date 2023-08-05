import { cn } from "@/lib/utils";
import NavItem from "./nav-item";

export default function NavRow() {
  return (
    <ul className={cn("flex flex-row justify-around")}>
      <NavItem
        className={cn("border-b-4 border-blue-500 text-black")}
        href={"#for-you"}
      >
        For you
      </NavItem>
      <NavItem href={"#trending"}>Trending</NavItem>
      <NavItem href={"#news"}>News</NavItem>
      <NavItem href={"#sports"}>Sports</NavItem>
      <NavItem href={"#entertainment"}>Entertainment</NavItem>
    </ul>
  );
}
