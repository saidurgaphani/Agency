"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { GlowButton } from "./ui/glow-button";
import { useNavigate } from "react-router-dom";
import { ButtonColorful } from "@/components/ui/button-colorful";

export function DigitalMarketingHero() {
    const navigate = useNavigate();
    return (
        <LampContainer>
            <motion.h1
                initial={{ opacity: 0.5, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="mt-0 md:mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
            >
                <span className="text-4xl md:text-7xl">Elevate Your Brand <br /> with Digital Marketing</span>
            </motion.h1>

            {/* CTA Button */}
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


        </LampContainer>
    );
}
