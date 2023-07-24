import { cn } from "@/lib/utils";
import TrendingItem from "./trending-item";

export default function Trending() {
  return (
    <ul className={cn("flex flex-col")}>
      <TrendingItem href={"#megan"} tweets={56145} tags={["Trending in News"]}>
        Meghan
      </TrendingItem>
      <TrendingItem href={"#starlink"} tweets={26454} tags={["Trending"]}>
        Starlink
      </TrendingItem>
      <TrendingItem
        href={"#warren-buffet"}
        tweets={5502}
        tags={["Trending in Business personalities"]}
      >
        Warren Buffet
      </TrendingItem>
      <TrendingItem
        href={"#poland"}
        tweets={29945}
        tags={["Trending in Political figures"]}
      >
        Poland
      </TrendingItem>
      <TrendingItem
        href={"#denzel-washington"}
        tweets={1215}
        tags={["Celebrities", "Trending"]}
      >
        Denzel Washington
      </TrendingItem>
    </ul>
  );
}
