import { motion } from 'framer-motion';

const phases = [
  {
    num: "01",
    title: "Analisi & Architettura",
    desc: "Nessun pixel viene mosso senza una logica. Analizzo il brief per definire architetture dell'informazione che bilancino obiettivi di business e necessità tecniche.",
    tags: ["User Flow", "Technical Specs", "SEO Strategy"]
  },
  {
    num: "02",
    title: "Design di Sistema",
    desc: "Progetto interfacce su Figma non come disegni statici, ma come sistemi di componenti vivi, pronti per essere tradotti in codice pulito e scalabile.",
    tags: ["Design Systems", "UI Mastery", "Prototyping"]
  },
  {
    num: "03",
    title: "Sviluppo ad Alte Prestazioni",
    desc: "Dallo sviluppo custom di WordPress alla potenza di React. Scrivo codice semantico, ottimizzato per le performance (PageSpeed 90+) e facile da manutenere.",
    tags: ["Clean Code", "React/TS", "WP Custom"]
  },
  {
    num: "04",
    title: "Deployment & Scale",
    desc: "Gestisco il ciclo finale: dal testing cross-browser all'integrazione SEO tecnica, fino al go-live. Il prodotto deve funzionare, sempre.",
    tags: ["Optimization", "Technical SEO", "Launch"]
  }
];

export default function Approach() {
  return (
    <section id="approccio" className="bg-[#050505] py-40 px-8 md:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Animato */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <h2 className="text-[#D4AF37] font-mono text-xs uppercase tracking-[0.5em] mb-6 underline decoration-[#D4AF37]/30 underline-offset-8">
            Methodology_v4.0
          </h2>
          <p className="text-white text-4xl md:text-6xl font-bold tracking-tighter leading-tight max-w-4xl">
            Il mio obiettivo è creare esperienze dove <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-white/40 italic font-serif font-light">estetica e performance</span> non scendono a compromessi.
          </p>
        </motion.div>

        {/* Grid delle Fasi con Stagger Effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
          {phases.map((phase, index) => (
            <motion.div 
              key={phase.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#050505] p-12 hover:bg-white/2 transition-all duration-500 group"
            >
              <div className="flex justify-between items-start mb-12">
                <span className="text-[#D4AF37] font-mono text-4xl font-light opacity-50 group-hover:opacity-100 transition-opacity">
                  {phase.num}
                </span>
                <div className="flex gap-2">
                  {phase.tags.map(tag => (
                    <span key={tag} className="text-[9px] font-mono text-white/30 uppercase tracking-widest px-2 py-1 border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <h3 className="text-white text-2xl font-bold uppercase mb-4 tracking-tight">
                {phase.title}
              </h3>
              
              <p className="text-[#888] font-light leading-relaxed max-w-sm">
                {phase.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Statement finale */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-24 pt-12 border-t border-white/5 flex flex-col md:row justify-between items-center gap-8"
        >
          <p className="text-white/40 font-mono text-[11px] uppercase tracking-[0.2em]">
            // Data-Driven Approach // User-Centric Logic
          </p>
          <div className="text-white font-light text-lg italic font-serif">
            "Trasformo brief complessi in prodotti digitali solidi."
          </div>
        </motion.div>
      </div>
    </section>
  );
}