"use client";
import React from "react";
import { motion } from "framer-motion";
import GradientBlinds from "@/components/GradientBlinds";
import { useNavigate } from "react-router-dom";
import { ButtonColorful } from "@/components/ui/button-colorful";

export function DigitalMarketingHeroV2() {
    const navigate = useNavigate();
    return (
        <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 w-full rounded-md z-0">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <GradientBlinds
                    blindCount={16}
                    gradientColors={['#3b0764', '#7e22ce', '#3b0764']} // Deep purple/indigo vibes to match the theme
                    noise={0.5}
                    paused={false}
                />
                {/* Overlay to dim it slightly if needed for text readability */}
                <div className="absolute inset-0 bg-slate-950/60" />
            </div>

            {/* Content */}
            <div className="relative z-50 flex flex-col items-center px-5 text-center">
                <motion.h1
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="mt-8 bg-gradient-to-br from-slate-100 to-slate-400 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
                >
                    <span className="text-4xl md:text-7xl">Elevate Your Brand <br /> with Digital Marketing</span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.5,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="mt-8"
                >
                    <ButtonColorful
                        label="Schedule a Meeting"
                        onClick={() => navigate('/schedule')}
                    />
                </motion.div>
            </div>
        </div>
    );
}
