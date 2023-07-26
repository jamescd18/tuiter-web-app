import Link from "@blocks/link";
import { MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";
import { ComponentProps } from "react";
import { Url } from "next/dist/shared/lib/router/router";

export default function TrendingItem({
  className,
  href,
  tweets,
  tags,
  children,
}: ComponentProps<"a"> & { href: Url; tweets: number; tags: string[] }) {
  return (
    <li className={cn("pb-4 w-full flex flex-row items-center", className)}>
      <Link className={cn("hover:no-underline text-sm")} href={href}>
        <div className={cn("text-gray-500 text-xs")}>
          {tags.map((t, idx, arr) => (idx != arr.length - 1 ? `${t} · ` : t))}
        </div>
        <div className={cn("font-bold text-black")}>{children}</div>
        <div className={cn("text-gray-500 text-xs")}>{tweets} tweets</div>
      </Link>
      <MoreHorizontal className={cn("ml-auto")} color="gray" size={18} />
    </li>
  );
}
