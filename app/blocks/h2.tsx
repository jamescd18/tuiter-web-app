import { ComponentProps } from "react";

export default function H2({ id, className, children }: ComponentProps<"h2">) {
  return (
    <h2
      id={id}
      className={`block text-2xl my-4 font-bold font-serif ${className}`}
    >
      {children}
    </h2>
  );
}
