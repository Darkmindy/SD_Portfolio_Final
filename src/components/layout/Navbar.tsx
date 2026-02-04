import { motion, useScroll } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const { scrollY, scrollYProgress } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => setIsScrolled(latest > 50));
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'py-4 bg-background/80 backdrop-blur-lg border-b border-white/5' : 'py-8 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <a href="#" className="text-white font-display text-xl tracking-tighter">
          Stefania<span className="italic font-serif text-gold">Designer</span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {['Lavori', 'Approccio', 'Competenze'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-[10px] uppercase tracking-[0.2em] text-text-dim hover:text-white transition-colors relative group">
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
          <a href="mailto:job@reattiva.com" className="px-5 py-2 border border-gold/30 rounded-full text-[10px] uppercase tracking-[0.2em] text-white hover:bg-gold hover:text-background transition-all">
            Candidatura_
          </a>
        </div>
      </div>
      <motion.div className="absolute bottom-0 left-0 right-0 h-px bg-gold origin-left" style={{ scaleX: scrollYProgress }} />
    </motion.nav>
  );
}