import { Url } from "next/dist/shared/lib/router/router";
import NextLink from "next/link";

export default function Link({
  id,
  className,
  href,
  children,
}: {
  id?: string;
  className?: string;
  href: Url;
  children: React.ReactNode;
}) {
  return (
    <NextLink
      className={`hover:underline text-blue-700 ${className}`}
      href={href}
    >
      {children}
    </NextLink>
  );
}
