import { TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import React from "react";
import { Tooltip } from "./ui/tooltip";

interface HintProps {
  label: string;
  children: React.ReactNode;
  asChild?: boolean;
  side?: "top" | "left" | "right" | "bottom";
  align?: "start" | "center" | "end";
}



const Hint = ({ label, children, asChild, side, align }: HintProps) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild={asChild}>{children}</TooltipTrigger>
        <TooltipContent 
        side={side}
        align={align}
        className="text-black p-0.5 rounded text-sm bg-white"
        >
            <p className=" font-semibold" >
                {label}
            </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default Hint;
