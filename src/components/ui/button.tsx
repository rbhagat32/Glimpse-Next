"use client";

import React from "react";
import { cn } from "@/lib/cn";
import { motion } from "motion/react";
import styled from "styled-components";

interface PropTypes extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg";
}

const buttonStyles = {
  base: "relative px-6 py-[10px] rounded-md text-white",
  sizes: {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  },
};

const GradientButton = styled(motion.button)`
  background: radial-gradient(circle at 50% 0%, rgba(250, 250, 250, 0.05) 0%, transparent 60%),
    oklch(21% 0.006 285.885);

  position: relative;
  padding: 10px 24px;
  border-radius: 8px;
  cursor: pointer;
  color: white;

  .Mask {
    mask-image: linear-gradient(
      -75deg,
      white calc(var(--x) + 20%),
      transparent calc(var(--x) + 30%),
      white calc(var(--x) + 100%)
    );
    -webkit-mask-image: linear-gradient(
      -75deg,
      white calc(var(--x) + 20%),
      transparent calc(var(--x) + 30%),
      white calc(var(--x) + 100%)
    );
  }

  .Overlay {
    background-image: linear-gradient(
      -75deg,
      oklch(62.3% 0.214 259.815) calc(var(--x) + 20%),
      oklch(62.3% 0.214 259.815) calc(var(--x) + 25%),
      oklch(62.3% 0.214 259.815) calc(var(--x) + 100%)
    );

    mask: linear-gradient(black, black) content-box, linear-gradient(black, black);
    -webkit-mask: linear-gradient(black, black) content-box, linear-gradient(black, black);

    mask-composite: exclude;
    -webkit-mask-composite: xor;

    position: absolute;
    inset: 0;
    border-radius: 8px;
    padding: 1px;
  }
`;

const Button = React.forwardRef<HTMLButtonElement, PropTypes>(
  ({ children, size = "md", className, ...props }, ref) => {
    return (
      <GradientButton
        ref={ref}
        type={props.type || "button"}
        initial={{ "--x": "100%", scale: 1 }}
        animate={{ "--x": "-100%" }}
        whileTap={{ scale: 0.9 }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 1,
          type: "spring",
          stiffness: 20,
          damping: 15,
          mass: 2,
          scale: {
            type: "spring",
            stiffness: 10,
            damping: 5,
            mass1: 0.1,
          },
        }}
        className={cn(
          buttonStyles.base,
          buttonStyles.sizes[size],
          props.disabled && "cursor-not-allowed",
          className
        )}
        {...(props as React.ComponentProps<typeof motion.button>)}
      >
        <span className={cn("Mask", "block relative w-full h-full tracking-wide")}>{children}</span>

        <span className={cn("Overlay", "block absolute inset-0 rounded-md p-[1px]")} />
      </GradientButton>
    );
  }
);

Button.displayName = "Button";
export { Button };
