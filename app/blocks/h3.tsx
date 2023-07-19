import { ComponentProps } from "react";

export default function H3({ id, className, children }: ComponentProps<"h3">) {
  return (
    <h3
      id={id}
      className={`block text-xl my-5 font-bold font-serif ${className}`}
    >
      {children}
    </h3>
  );
}
