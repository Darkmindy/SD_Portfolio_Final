import { motion } from 'framer-motion';

export default function Footer() {
  const socials = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/stefania-deliso-developer/' },
    { name: 'GitHub', url: 'https://github.com/darkmindy' },
  ];

  return (
    <footer className="bg-[#1A1A1A] py-24 px-6 md:px-12 lg:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Cambiato div in motion.div per usare l'animazione */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          
          <div className="space-y-8">
            <h2 className="text-white text-5xl md:text-7xl font-bold tracking-tighter leading-none">
              Pronti per il <br />
              <span className="text-[#D4AF37] font-serif italic font-light">prossimo step?</span>
            </h2>
            <p className="text-[#C0C0C0] text-xl max-w-md font-light">
              Attualmente valuto opportunità come <span className="text-white">Full-stack Designer</span> o <span className="text-white">Senior Frontend Developer</span> in contesti innovativi.
            </p>
          </div>

          <div className="bg-[#252525] p-8 md:p-12 rounded-3xl border border-white/10 relative overflow-hidden group">
            <div className="relative z-10 space-y-8">
              <p className="text-white/60 font-mono text-xs uppercase tracking-[0.3em]">Contatti_Diretti</p>
              
              <div className="space-y-4">
                <a 
                  href="mailto:stefania.devgdi@gmail.com" 
                  className="block text-2xl md:text-3xl text-white hover:text-[#D4AF37] transition-colors font-medium break-all"
                >
                  stefania.devgdi@gmail.com
                </a>
              </div>

              <div className="flex gap-8 pt-4">
                {socials.map((social) => (
                  <motion.a 
                    key={social.name} 
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2, color: "#D4AF37" }} // Animazione hover attiva
                    className="text-xs uppercase tracking-widest text-white/40 transition-colors"
                  >
                    {social.name}
                  </motion.a>
                ))}
              </div>
            </div>
            
            {/* Elemento decorativo con opacità variabile al mouse over */}
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="absolute -right-10 -bottom-10 text-[15rem] font-black text-white/5 pointer-events-none select-none"
            >
              HI
            </motion.div>
          </div>
        </motion.div>

        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:row justify-between gap-4 text-[10px] font-mono uppercase tracking-widest text-white/30">
          <p>© {new Date().getFullYear()} Stefania Deliso — Pixel & Code Mastery</p>
          <p>Built with React + TypeScript</p>
        </div>
      </div>
    </footer>
  );
}