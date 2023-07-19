import { ComponentProps } from "react";

export default function H1({ id, className, children }: ComponentProps<"h1">) {
  return (
    <h1
      id={id}
      className={`block text-4xl my-3 font-bold font-serif ${className}`}
    >
      {children}
    </h1>
  );
}
