import Image from "next/image";
import { ComponentProps } from "react";

import { cn } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import H2 from "@/app/blocks/h2";

export default function ImgBanner({ className }: ComponentProps<"img">) {
  return (
    <div className={cn("w-full ", className)}>
      <AspectRatio ratio={16 / 9} className={cn("relative")}>
        <div
          className={cn(
            "absolute z-10 w-full h-full object-cover bg-gradient-to-t from-black to-transparent"
          )}
        >
          <div
            className={cn("flex flex-col justify-end h-full text-white mx-4")}
          >
            <div className={cn("flex flex-row items-center w-full")}>
              Event ·{" "}
              <Badge className={cn("rounded-md mx-1")} variant="destructive">
                LIVE
              </Badge>
            </div>
            <H2 className={cn("w-full mt-0")}>
              The Coronation of King Charles III
            </H2>
          </div>
        </div>
        <Image
          fill
          className={cn("absolute w-full")}
          src="https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2023-05/230506-charles-crown-mb-1234-cb5308.jpg"
          alt="King Charles III of England and Scotland in his coronation"
        />
      </AspectRatio>
    </div>
  );
}
