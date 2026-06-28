"use client";

import React from "react";
import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ----------------------------------------------------------------------
// Input Component
// ----------------------------------------------------------------------
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, id, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label htmlFor={id} className="text-sm font-medium text-white/70">
            {label}
          </label>
        )}
        <input
          id={id}
          ref={ref}
          className={cn(
            "flex h-10 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/30",
            "focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/30 transition-all duration-300",
            "disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

// ----------------------------------------------------------------------
// Textarea Component
// ----------------------------------------------------------------------
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, id, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label htmlFor={id} className="text-sm font-medium text-white/70">
            {label}
          </label>
        )}
        <textarea
          id={id}
          ref={ref}
          className={cn(
            "flex min-h-[80px] w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/30",
            "focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/30 transition-all duration-300",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "resize-y custom-scrollbar",
            className
          )}
          {...props}
        />
      </div>
    );
  }
);
Textarea.displayName = "Textarea";

// ----------------------------------------------------------------------
// Button Component
// ----------------------------------------------------------------------
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "ghost";
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", isLoading, children, ...props }, ref) => {
    const variants = {
      primary: "bg-white text-black hover:bg-white/90",
      secondary: "bg-white/10 text-white hover:bg-white/20 border border-white/5",
      danger: "bg-red-500/10 text-red-500 hover:bg-red-500/20 border border-red-500/10",
      ghost: "bg-transparent text-white/70 hover:text-white hover:bg-white/10",
    };

    return (
      <button
        ref={ref}
        disabled={isLoading || props.disabled}
        className={cn(
          "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-colors",
          "focus:outline-none focus:ring-2 focus:ring-white/20 disabled:pointer-events-none disabled:opacity-50",
          variants[variant],
          className
        )}
        {...props}
      >
        {isLoading ? (
          <span className="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        ) : null}
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
