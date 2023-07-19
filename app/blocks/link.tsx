import { ComponentProps } from "react";
import NextLink from "next/link";
import { Url } from "next/dist/shared/lib/router/router";

export default function Link({
  className,
  href,
  children,
}: ComponentProps<"a"> & { href: Url }) {
  return (
    <NextLink
      className={`hover:underline text-blue-700 ${className}`}
      href={href}
    >
      {children}
    </NextLink>
  );
}
