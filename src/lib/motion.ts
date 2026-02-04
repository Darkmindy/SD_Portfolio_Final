import type { Variants } from 'framer-motion';

export const BLOB_VARIANTS: Variants = {
  animate: {
    scale: [1, 1.1, 1],
    rotate: [0, 5, 0],
    transition: { 
      duration: 10, 
      repeat: Infinity, 
      ease: "easeInOut" 
    }
  }
};

export const CONTAINER_VARIANTS: Variants = {
  hidden: {},
  visible: { 
    transition: { 
      staggerChildren: 0.1, 
      delayChildren: 0.4 
    } 
  }
};

export const CHILD_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.9, 
      ease: [0.16, 1, 0.3, 1] 
    } 
  }
};