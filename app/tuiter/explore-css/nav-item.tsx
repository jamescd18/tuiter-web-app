import Link from "@blocks/link";
import { cn } from "@/lib/utils";
import { ComponentProps } from "react";
import { Url } from "next/dist/shared/lib/router/router";

export default function NavItem({
  className,
  href,
  children,
}: ComponentProps<"a"> & { href: Url }) {
  return (
    <li className={cn("pb-2", className)}>
      <Link
        className={cn("text-gray-500 font-bold hover:no-underline text-sm")}
        href={href}
      >
        {children}
      </Link>
    </li>
  );
}
