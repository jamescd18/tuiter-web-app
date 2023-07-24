import Link from "@blocks/link";
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
    <li className={cn("pb-2", className)}>
      <Link
        className={cn("text-gray-500 font-bold hover:no-underline text-sm")}
        href={href}
      >
        <div>
          {tags.map((t, idx, arr) => (idx != arr.length - 1 ? `${t} · ` : t))}
        </div>
        {children}
        <div>{tweets} tweets</div>
      </Link>
    </li>
  );
}
