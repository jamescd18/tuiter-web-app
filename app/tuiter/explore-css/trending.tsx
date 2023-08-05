import { cn } from "@/lib/utils";
import TrendingItem from "./trending-item";

export default function Trending() {
  return (
    <ul className={cn("flex flex-col m-4")}>
      <TrendingItem
        href={"#megan"}
        tweets={"56.1K"}
        tags={["Trending in News"]}
      >
        Meghan
      </TrendingItem>
      <TrendingItem href={"#starlink"} tweets={"26.4K"} tags={["Trending"]}>
        Starlink
      </TrendingItem>
      <TrendingItem
        href={"#warren-buffet"}
        tweets={"5,502"}
        tags={["Trending in Business personalities"]}
      >
        Warren Buffet
      </TrendingItem>
      <TrendingItem
        href={"#poland"}
        tweets={"29.9K"}
        tags={["Trending in Political figures"]}
      >
        Poland
      </TrendingItem>
      <TrendingItem
        href={"#denzel-washington"}
        tweets={"1,215"}
        tags={["Celebrities", "Trending"]}
      >
        Denzel Washington
      </TrendingItem>
    </ul>
  );
}
