import Image from "next/image";
import { ComponentProps } from "react";
import {
  BadgeCheck,
  MessageCircle,
  Repeat2,
  Heart,
  BarChart2,
  Share,
  MoreHorizontal,
} from "lucide-react";

import Bold from "@blocks/bold";
import { cn } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";

import JCD from "@public/JCD.jpg";

interface TweetProps {
  name: string;
  username: string;
  date: string;
  content: string;
  picUrl: string;
  picSite: string;
  picTitle: string;
  picDesc: string;
  replies: number;
  retweets: number;
  likes: number;
  views: string;
  liked?: boolean;
}

export default function Tweet({
  name,
  username,
  date,
  content,
  picUrl,
  picSite,
  picTitle,
  picDesc,
  replies,
  retweets,
  likes,
  views,
  liked,
}: ComponentProps<"div"> & TweetProps) {
  return (
    <div className={cn("flex flex-row mx-4")}>
      <div className={cn("mr-4 mt-4")}>
        <Image
          className={cn("rounded-full")}
          src={JCD}
          width="48"
          height="48"
          alt={"JCD's face"}
        />
      </div>
      <div className={cn("flex flex-col w-full")}>
        <div className={cn("flex flex-row align-middle items-center mt-2")}>
          <Bold className={cn("font-sans text-sm")}>{name}</Bold>
          <BadgeCheck className={cn("ml-2")} color="blue" size={18} />
          <div className={cn("text-sm text-gray-500 ml-2 mr-2")}>
            @{username}
          </div>
          <div className={cn("text-sm text-gray-500 mr-2")}>·</div>
          <div className={cn("text-sm text-gray-500")}>{date}</div>

          <MoreHorizontal className={cn("ml-auto")} color="gray" size={18} />
        </div>
        <div className={cn("text-sm")}>{content}</div>
        <div
          className={cn(
            "flex flex-col border border-gray-300 rounded-xl overflow-hidden mt-4"
          )}
        >
          <AspectRatio ratio={16 / 9} className={cn("relative")}>
            <Image
              fill
              className={cn("absolute w-full")}
              src={picUrl}
              alt={picTitle}
            />
          </AspectRatio>
          <div className={cn("flex flex-col m-2")}>
            <div className={cn("text-sm text-gray-500")}>{picSite}</div>
            <div className={cn("text-sm")}>{picTitle}</div>
            <div className={cn("text-sm text-gray-500")}>{picDesc}</div>
          </div>
        </div>
        <div className={cn("flex flex-row items-center my-2")}>
          <MessageCircle className={cn("mr-2")} color="gray" size={18} />
          <div className={cn("text-sm text-gray-500 mr-16")}>{replies}</div>
          <Repeat2 className={cn("mr-2 ml-6")} color="gray" size={18} />
          <div className={cn("text-sm text-gray-500 mr-16")}>{retweets}</div>
          <Heart className={cn("mr-2 ml-6")} color="gray" size={18} />
          <div className={cn("text-sm text-gray-500 mr-16")}>{likes}</div>
          <BarChart2 className={cn("mr-2 ml-6")} color="gray" size={18} />
          <div className={cn("text-sm text-gray-500 mr-16")}>{views}</div>
          <Share className={cn("mr-2")} color="gray" size={18} />
        </div>
      </div>
    </div>
  );
}
