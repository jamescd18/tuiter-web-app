import { ComponentProps } from "react";

export default function Bold({ id, className, children }: ComponentProps<"p">) {
  return (
    <p id={id} className={`font-bold mt-10 font-serif text-base ${className}`}>
      {children}
    </p>
  );
}
