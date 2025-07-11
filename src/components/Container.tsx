import { cn } from "@/app/utils/cn";
import React from "react";

export default function Container(props: React.HTMLProps<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn(
        "w-full bg-white border border-transparent rounded-xl flex py-4 shadow-sm",
        props.className
      )}
    />
  );
}
