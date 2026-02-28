import React, { useLayoutEffect, useRef, useMemo, ReactNode, RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
    children: ReactNode | string;
    scrollContainerRef?: RefObject<HTMLElement>;
    enableBlur?: boolean;
    baseOpacity?: number;
    baseRotation?: number;
    blurStrength?: number;
    containerClassName?: string;
    textClassName?: string;
    rotationEnd?: string;
    wordAnimationEnd?: string;
}

const ScrollReveal = ({
    children,
    scrollContainerRef,
    enableBlur = true,
    baseOpacity = 0.1,
    baseRotation = 3,
    blurStrength = 4,
    containerClassName = '',
    textClassName = '',
    rotationEnd = 'bottom bottom',
    wordAnimationEnd = 'bottom bottom'
}: ScrollRevealProps) => {
    const containerRef = useRef<HTMLHeadingElement>(null);
    const splitText = useMemo(() => {
        const processChild = (child: ReactNode, keyPrefix: string): ReactNode => {
            if (typeof child === 'string') {
                return child.split(/(\s+)/).map((word, index) => {
                    if (word.match(/^\s+$/)) return word;
                    return (
                        <span className="inline-block word" key={`${keyPrefix}-${index}`}>
                            {word}
                        </span>
                    );
                });
            }

            if (React.isValidElement(child)) {
                // If it's a React element (like embedded span for font), we preserve it
                // but adding 'word' class might be needed if we want it to animate.
                // However, if the element has its own structure, we might need to handle it.
                // For simple usage like <span className="font-script">Strategy</span>:
                // We can just clone it and add 'word' class?
                // Or if the user passes <span className="font-script">Strategy</span>, we treat it as a single "word" block.
                const props = child.props as { className?: string; children?: ReactNode;[key: string]: any };
                return React.cloneElement(child as React.ReactElement<any>, {
                    ...props,
                    key: keyPrefix,
                    className: cn("inline-block word", props.className)
                });
            }
            return child;
        };

        return React.Children.map(children, (child, index) => processChild(child, `child-${index}`));
    }, [children]);

    useLayoutEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                el,
                { transformOrigin: '0% 50%', rotate: baseRotation },
                {
                    ease: 'none',
                    rotate: 0,
                    scrollTrigger: {
                        trigger: el,
                        scroller,
                        start: 'top bottom',
                        end: rotationEnd,
                        scrub: true
                    }
                }
            );

            const wordElements = el.querySelectorAll('.word');

            // Opacity animation
            gsap.fromTo(
                wordElements,
                { opacity: baseOpacity, willChange: 'opacity' },
                {
                    ease: 'none',
                    opacity: 1,
                    stagger: 0.05,
                    scrollTrigger: {
                        trigger: el,
                        scroller,
                        start: 'top bottom-=20%',
                        end: wordAnimationEnd,
                        scrub: true
                    }
                }
            );

            // Blur animation
            if (enableBlur) {
                gsap.fromTo(
                    wordElements,
                    { filter: `blur(${blurStrength}px)` },
                    {
                        ease: 'none',
                        filter: 'blur(0px)',
                        stagger: 0.05,
                        scrollTrigger: {
                            trigger: el,
                            scroller,
                            start: 'top bottom-=20%',
                            end: wordAnimationEnd,
                            scrub: true
                        }
                    }
                );
            }
        }, containerRef);

        // Refresh ScrollTrigger to ensure positions are correct after layout shifts
        const timer = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 100);

        return () => {
            ctx.revert();
            clearTimeout(timer);
        };
    }, [scrollContainerRef, enableBlur, baseRotation, baseOpacity, rotationEnd, wordAnimationEnd, blurStrength, children]);

    return (
        <h2 ref={containerRef} className={`my-5 ${containerClassName}`}>
            <p className={`text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] font-semibold ${textClassName}`}>
                {splitText}
            </p>
        </h2>
    );
};

export default ScrollReveal;
