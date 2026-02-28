import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

// Color Palette from index.css
const COLOR_PRIMARY = 'hsla(0, 0%, 100%, 1.00)'; // hero-glow
const COLOR_ACCENT = 'hsla(0, 0%, 100%, 1.00)';  // hero-accent
//const COLOR_PARTICLE = '#f1f1f1';

interface Particle {
    id: number;
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    color: string;
    life: number;
}

export const CustomCursor = () => {
    const isMobile = useIsMobile();

    // 1. Mouse Tracking
    const mouse = useRef({ x: -100, y: -100 }); // Start off-screen
    const prevMouse = useRef({ x: -100, y: -100 });

    // Motion Values for smooth physics
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // 2. Physics & Inertial Lag
    // Core: Heavy damping, high stiffness (precise)
    const coreSpringConfig = { damping: 20, stiffness: 400, mass: 0.5 };
    const coreX = useSpring(cursorX, coreSpringConfig);
    const coreY = useSpring(cursorY, coreSpringConfig);

    // Ring: Liquid lag (low stiffness)
    const ringSpringConfig = { damping: 20, stiffness: 100, mass: 1 };
    const ringX = useSpring(cursorX, ringSpringConfig);
    const ringY = useSpring(cursorY, ringSpringConfig);

    // Visibility State
    const [isVisible, setIsVisible] = useState(false);

    // Hover State
    const [isHovering, setIsHovering] = useState(false);

    // Particles State
    const [particles, setParticles] = useState<Particle[]>([]);

    // 3. Setup Listeners
    useEffect(() => {
        if (isMobile) return;

        const handleMouseMove = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            mouse.current = { x: e.clientX, y: e.clientY };

            // Show cursor on movement
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;

            // Hide cursor when hovering iframes (fixes stuck cursor on embeds)
            if (target.tagName === 'IFRAME') {
                setIsVisible(false);
            }

            // Check for interactive elements
            const isInteractive =
                target.matches('a, button, input, textarea, select, [role="button"]') ||
                target.closest('a, button, [role="button"]');

            setIsHovering(!!isInteractive);
        };

        const handleMouseOut = (e: MouseEvent) => {
            // Hide cursor when leaving the window
            if (!e.relatedTarget) {
                setIsVisible(false);
            }
        };

        // Hide default cursor
        document.documentElement.style.cursor = 'none';
        document.body.style.cursor = 'none';

        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseout', handleMouseOut);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseout', handleMouseOut);
            document.documentElement.style.cursor = '';
            document.body.style.cursor = '';
        };
    }, [cursorX, cursorY, isVisible, isMobile]);

    // 4. Particle System Loop
    useEffect(() => {
        let animationFrameId: number;
        let isActive = true;

        const loop = () => {
            if (!isActive || isMobile) return;

            const now = Date.now();

            // Calculate velocity
            const dx = mouse.current.x - prevMouse.current.x;
            const dy = mouse.current.y - prevMouse.current.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const speed = Math.min(dist, 50); // Cap max speed calculation

            // Spawn Particles
            if (speed > 0.5 && isVisible) { // Only emit if moving and visible
                const emitCount = Math.floor(speed * 0.3) + (isHovering ? 2 : 0);
                const newParticles: Particle[] = [];
                // ... (rest of particle logic)

                // for (let i = 0; i < emitCount; i++) {
                //     newParticles.push({
                //         id: Math.random(),
                //         x: mouse.current.x + (Math.random() - 0.5) * 10,
                //         y: mouse.current.y + (Math.random() - 0.5) * 10,
                //         vx: (Math.random() - 0.5) * 2,
                //         vy: -1 - Math.random() * 2 - (isHovering ? 1.5 : 0), // Upward drift
                //         size: Math.random() * 2 + 1,
                //         color: COLOR_PARTICLE,
                //         life: 1.0
                //     });
                // }

                if (newParticles.length > 0) {
                    setParticles(prev => {
                        const updated = [...prev, ...newParticles];
                        return updated.slice(-60); // Keep max 60 particles for performance
                    });
                }
            }

            // Update Particles
            setParticles(prev => {
                if (prev.length === 0) return prev;

                return prev
                    .map(p => ({
                        ...p,
                        x: p.x + p.vx,
                        y: p.y + p.vy, // Drifts upwards
                        life: p.life - 0.02 // Fade out speed
                    }))
                    .filter(p => p.life > 0);
            });

            prevMouse.current = { ...mouse.current };
            animationFrameId = requestAnimationFrame(loop);
        };

        loop();
        return () => {
            isActive = false;
            cancelAnimationFrame(animationFrameId);
        };
    }, [isHovering, isMobile]);

    if (isMobile) return null;

    return createPortal(
        <div
            className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden transition-opacity duration-300"
            aria-hidden="true"
            style={{ opacity: isVisible ? 1 : 0 }}
        >
            {/* Zero-G Fragments */}
            {particles.map((p) => (
                <div
                    key={p.id}
                    style={{
                        position: 'absolute',
                        left: p.x,
                        top: p.y,
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                        backgroundColor: p.color,
                        borderRadius: '50%',
                        opacity: p.life,
                        boxShadow: `0 0 4px ${p.color}`,
                        transform: 'translate(-50%, -50%)',
                    }}
                />
            ))}

            {/* Gravity Ring */}
            <motion.div
                style={{
                    x: ringX,
                    y: ringY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                className="absolute rounded-full border"
                animate={{
                    width: isHovering ? 80 : 60,
                    height: isHovering ? 80 : 60,
                    opacity: isHovering ? 0.8 : 0.6,
                    borderColor: '#f1f1f1',
                    scale: isHovering ? 1.2 : 1,
                }}
                transition={{
                    duration: 0.2, // Smooth visual transition for hover sizing
                }}
            >
                {/* Subtle inner liquid-like fill on hover */}
                {isHovering && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.1 }}
                        className="w-full h-full rounded-full"
                        style={{ backgroundColor: COLOR_ACCENT }}
                    />
                )}
            </motion.div>

            {/* Singularity Core */}
            <motion.div
                style={{
                    x: coreX,
                    y: coreY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                className="absolute h-2 w-2 rounded-full bg-white"
                animate={{
                    boxShadow: `0 0 10px ${isHovering ? COLOR_ACCENT : COLOR_PRIMARY}`
                }}
            />
        </div>,
        document.body
    );
};
