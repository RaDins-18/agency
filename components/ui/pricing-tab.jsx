"use client";
import * as React from "react"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

export function Tab({
  text,
  selected,
  setSelected
}) {
  return (
    (
      <button
        onClick={() => setSelected(text)}
        className={cn(
          "relative w-fit h-fit rounded-full flex items-center px-4 py-2.5 lg:py-2 font-semibold capitalize cursor-pointer",
          `transition-colors ${selected ? 'text-white' : 'text-black'}`
        )}>
        <span className="relative text-xs md:text-sm lg:text-base z-10 leading-none">{text}</span>
        {selected && (
          <motion.span
            layoutId="tab"
            transition={{ type: "spring", duration: 0.4 }}
            className="absolute inset-0 z-0 rounded-full bg-[#6A47ED] shadow-sm" />
        )}
      </button>
    )
  );
}