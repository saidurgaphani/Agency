import { motion, useInView } from 'framer-motion';
import * as React from 'react';
import { cn } from '@/lib/utils';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface BlurInHeadingProps {
  children: React.ReactNode;
  as?: HeadingLevel;
  className?: string;
}

export const BlurInHeading = ({ 
  children, 
  as: Component = 'h2',
  className 
}: BlurInHeadingProps) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ filter: 'blur(20px)', opacity: 0 }}
      animate={isInView ? { filter: 'blur(0px)', opacity: 1 } : {}}
      transition={{ duration: 1.2 }}
    >
      <Component className={cn(className)}>
        {children}
      </Component>
    </motion.div>
  );
};
