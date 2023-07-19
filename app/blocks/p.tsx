import { ComponentProps } from "react";

export default function P({ id, className, children }: ComponentProps<"p">) {
  return (
    <p id={id} className={`font-serif text-base my-3 ${className}`}>
      {children}
    </p>
  );
}
