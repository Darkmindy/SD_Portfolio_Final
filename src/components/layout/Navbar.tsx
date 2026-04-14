'use client';

import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { GithubLogoIcon, LinkedinLogoIcon, CpuIcon, CaretRightIcon } from '@phosphor-icons/react';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  // La navbar appare solo dopo 100px di scroll per lasciare pulita la Hero
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsVisible(latest > 100);
  });

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Works', href: '#lavori' },
    { name: 'Contact', href: '#footer' }, 
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: -20, x: "-50%", opacity: 0 }}
          animate={{ y: 0, x: "-50%", opacity: 1 }}
          exit={{ y: -20, x: "-50%", opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed top-6 left-1/2 z-100 flex justify-center pointer-events-none"
        >
          <div className="pointer-events-auto flex items-center gap-5 px-5 py-2 rounded-full bg-[#030014]/80 backdrop-blur-xl border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.6)]">
            
            {/* Brand Logo / System Status */}
            <div className="flex items-center gap-2 pr-4 border-r border-white/10">
              <CpuIcon size={14} weight="thin" className="text-blue-500" />
              <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest">SD_DEV</span>
            </div>

            {/* Main Navigation */}
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-[10px] uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Social & Action */}
            <div className="flex items-center gap-3 pl-4 border-l border-white/10">
              <a 
                href="https://github.com/darkmindy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/30 hover:text-blue-500 transition-colors"
              >
                <GithubLogoIcon size={16} weight="thin" />
              </a>
              <a 
                href="https://www.linkedin.com/in/stefania-deliso-developer/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/30 hover:text-blue-500 transition-colors"
              >
                <LinkedinLogoIcon size={16} weight="thin" />
              </a>
              <CaretRightIcon size={10} weight="bold" className="text-blue-500 animate-pulse" />
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}