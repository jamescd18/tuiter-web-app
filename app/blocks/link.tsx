import { ComponentProps } from "react";
import NextLink from "next/link";
import { Url } from "next/dist/shared/lib/router/router";
import { cn } from "@/lib/utils";

export default function Link({
  className,
  href,
  children,
}: ComponentProps<"a"> & { href: Url }) {
  return (
    <NextLink
      className={cn("hover:underline text-blue-700", className)}
      href={href}
    >
      {children}
    </NextLink>
  );
}
