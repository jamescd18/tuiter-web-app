import { ArrowLeft, MoreHorizontal } from "lucide-react";

import H1 from "@blocks/h1";
import { cn } from "@/lib/utils";

import Tweet from "./tweet";

export default function BookmarksCSS() {
  return (
    <div className={cn("flex flex-col")}>
      <div className={cn("flex flex-row items-center")}>
        <ArrowLeft className={cn("ml-2 mr-10")} size={20} />
        <H1 className={cn("font-bold text-lg font-sans")}>All Bookmarks</H1>

        <MoreHorizontal className={cn("ml-auto mr-4")} size={20} />
      </div>
      <div className={cn("flex flex-col")}>
        <Tweet
          name={"Drive Tesla"}
          username={"DriveTeslaca"}
          date={"May 5"}
          content={
            "South Korean firm wins $300 million Tesla Cybertruck parts supply contract"
          }
          picUrl={
            "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2023-05/230506-charles-crown-mb-1234-cb5308.jpg"
          }
          picSite={"driveteslacanada.ca"}
          picTitle={
            "South Korean firm wins $300 million Tesla Cybertruck parts supply contract"
          }
          picDesc={
            "Tesla is getting closer and closer to the start of Cybertruck production, and when it does some of the parts that will go into it will come from this firm."
          }
          replies={8}
          retweets={32}
          likes={374}
          views={"24.3K"}
        />
        <hr />
        <Tweet
          name={"TESLARATI"}
          username={"Teslarati"}
          date={"May 5"}
          content={
            "Tesla Cybertruck production teased in $227M+ order for parts"
          }
          picUrl={
            "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2023-05/230506-charles-crown-mb-1234-cb5308.jpg"
          }
          picSite={"teslarati.com"}
          picTitle={""}
          picDesc={
            "Tesla Cybertruck production teased in $227M+ order for parts"
          }
          replies={9}
          retweets={56}
          likes={430}
          views={"45.7K"}
          liked
        />
      </div>
    </div>
  );
}
