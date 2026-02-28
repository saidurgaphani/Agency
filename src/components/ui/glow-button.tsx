import React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface GlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export function GlowButton({ className, children, ...props }: GlowButtonProps) {
    return (
        <button
            className={cn(
                "group flex min-w-[180px] decoration-0 transition-transform active:scale-95 cursor-pointer outline-none w-auto h-[50px] px-6 relative items-center justify-center rounded-[8px] border-none bg-white/5",
                className
            )}
            type="button"
            {...props}
        >
            {/* Glow Layer */}
            <div
                className="pointer-events-none transition-opacity ease-in-out duration-500 group-hover:opacity-0 opacity-100 absolute inset-0 rounded-[8px] blur-[15px]"
                style={{
                    background:
                        "radial-gradient(15% 50% at 50% 100%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)",
                }}
            />

            {/* Glow Hover Layer */}
            <div
                className="pointer-events-none transition-opacity ease-in-out duration-500 group-hover:opacity-100 opacity-0 absolute inset-0 rounded-[8px] blur-[18px]"
                style={{
                    background:
                        "radial-gradient(60.6% 50% at 50% 100%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)",
                }}
            />

            {/* Stroke Layer */}
            <div
                className="pointer-events-none will-change-auto transition-opacity ease-in-out duration-500 group-hover:opacity-0 opacity-100 absolute inset-0 rounded-[8px]"
                style={{
                    background:
                        "radial-gradient(10.7% 50% at 50% 100%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)",
                }}
            />

            {/* Stroke Hover Layer */}
            <div
                className="pointer-events-none will-change-auto transition-opacity ease-in-out duration-500 group-hover:opacity-100 opacity-0 absolute inset-0 rounded-[8px]"
                style={{
                    background:
                        "radial-gradient(60.1% 50% at 50% 100%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)",
                }}
            />

            {/* Fill Layer */}
            <div className="rounded-[7px] absolute inset-[1px] bg-black opacity-100" />

            {/* Content Layer */}
            <div className="relative z-20 flex items-center justify-center gap-2 opacity-100 text-white">
                <span
                    className="m-0 p-0 font-sans text-[15px] font-medium tracking-wide"
                    style={{
                        WebkitFontSmoothing: "antialiased",
                        textShadow: "0 1px 2px rgba(0,0,0,0.5)",
                    }}
                >
                    {children}
                </span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
        </button>
    );
}
