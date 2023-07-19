import { ComponentProps } from "react";

export default function H4({ id, className, children }: ComponentProps<"h4">) {
  return (
    <h4
      id={id}
      className={`block text-lg my-5 font-bold font-serif ${className}`}
    >
      {children}
    </h4>
  );
}
