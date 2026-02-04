import { motion, useScroll } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const { scrollY, scrollYProgress } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => setIsScrolled(latest > 50));
    return () => unsubscribe();
  }, [scrollY]);

  // Array aggiornato con gli ID corretti per Expertise e Approach
  const navLinks = [
    { name: 'Lavori', href: '#lavori' },
    { name: 'Skills', href: '#expertise' },
    { name: 'Metodo', href: '#approccio' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'py-4 bg-black/80 backdrop-blur-lg border-b border-white/5' : 'py-8 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <a href="#" className="text-white font-display text-xl tracking-tighter">
          Stefania<span className="italic font-serif text-[#D4AF37]">Deliso</span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[10px] uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#D4AF37] transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
          
          {/* Pulsante Contatto Diretto aggiornato */}
          <a 
            href="mailto:stefania.devgdi@gmail.com" 
            className="px-5 py-2 border border-[#D4AF37]/30 rounded-full text-[10px] uppercase tracking-[0.2em] text-white hover:bg-[#D4AF37] hover:text-black transition-all"
          >
            Contattami_
          </a>
        </div>
      </div>
      
      {/* Barra di progresso dello scroll */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-px bg-[#D4AF37] origin-left" 
        style={{ scaleX: scrollYProgress }} 
      />
    </motion.nav>
  );
}