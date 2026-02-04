import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section 
      className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden bg-[#1A1A1A] px-6 md:px-12 lg:px-24"
      aria-labelledby="hero-title"
    >
      {/* Glow delicato per profondità */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" 
        aria-hidden="true"
      />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-7xl mx-auto w-full"
      >
        <div className="flex items-center gap-4 mb-8">
          <span className="text-[#D4AF37] font-mono text-xs uppercase tracking-[0.4em]">
            10+ Years of Mastery
          </span>
          <div className="h-px w-16 bg-[#D4AF37]/30" aria-hidden="true" />
        </div>

        <h1 
          id="hero-title" 
          className="text-white text-5xl md:text-7xl lg:text-[6.5rem] font-extrabold leading-[1.1] tracking-tighter mb-8"
        >
          Pixel <span className="font-serif italic font-light text-[#D4AF37]">&</span> Code.<br />
          <span className="text-white/60 font-medium">Design + Development.</span>
        </h1>

        <p className="text-[#C0C0C0] text-lg md:text-xl max-w-2xl font-light leading-relaxed mb-12">
          Trasformo idee complesse in prodotti digitali che funzionano. 
          Unisco la precisione del <span className="text-white font-medium">Graphic Design</span> alla potenza di 
          <span className="text-white font-medium"> React & TypeScript</span>, con 8 anni di expertise su WordPress.
        </p>

        <div className="flex flex-wrap items-center gap-6">
          <a 
            href="#lavori" 
            className="px-8 py-4 bg-[#D4AF37] text-[#1A1A1A] text-xs font-bold uppercase tracking-widest rounded-full hover:brightness-110 transition-all focus:outline focus:outline-2 focus:outline-offset-4 focus:outline-[#D4AF37]"
          >
            Esplora i progetti
          </a>
          
          <div className="flex items-center gap-3 px-5 py-3 border border-white/10 rounded-full bg-white/5">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" aria-hidden="true" />
            <span className="text-white/70 font-mono text-[10px] uppercase tracking-widest">
              Open to Senior Opportunities
            </span>
          </div>
        </div>
      </motion.div>

      {/* Footer della Hero (Technical Stats) */}
      <div className="absolute bottom-10 left-6 md:left-12 lg:left-24 right-6 md:right-12 lg:right-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-t border-white/5 pt-8">
        <div>
          <p className="text-[9px] text-white/30 uppercase tracking-[0.4em] mb-2 font-mono">Core Stack</p>
          <p className="text-white/80 font-mono text-xs">React // TypeScript // WP Custom // Figma</p>
        </div>
        <div className="text-right">
          <p className="text-[9px] text-white/30 uppercase tracking-[0.4em] mb-2 font-mono">Performance Standard</p>
          <p className="text-white text-2xl font-bold tracking-tighter">PageSpeed 90+</p>
        </div>
      </div>
    </section>
  );
}