import { motion } from 'framer-motion';

const expertiseItems = [
  {
    title: "Design",
    subtitle: "UI/UX & Branding Systems",
    desc: "Progetto interfacce user-centric su Figma e sviluppo sistemi visivi scalabili, pronti per la produzione cross-channel.",
    icon: "🎨" 
  },
  {
    title: "Sviluppo",
    subtitle: "Frontend & Custom CMS",
    desc: "Dal WordPress Custom Expert allo sviluppo React e TypeScript, creo architetture di codice pulite, performanti e di facile manutenzione.",
    icon: "💻" 
  },
  {
    title: "Strategia",
    subtitle: "Performance & Technical SEO",
    desc: "Ottimizzo le performance digitali (PageSpeed 90+), implemento la SEO tecnica e adotto un approccio data-driven per massimizzare l'impatto.",
    icon: "🚀" 
  },
  {
    title: "Gestione",
    subtitle: "Ciclo di Prodotto End-to-End",
    desc: "Supervisiono l'intero processo: dal concept iniziale su Figma al deployment finale e al monitoring post-lancio, garantendo solidità e qualità.",
    icon: "⚙️" 
  },
];

export default function Expertise() {
  return (
    <section 
      id="expertise" 
      className="bg-(--color-background) py-32 px-6 md:px-12 lg:px-24 border-t border-(--color-text-secondary)/10"
      aria-labelledby="expertise-title"
    >
      <div className="max-w-7xl mx-auto">
        <h2 
          id="expertise-title" 
          className="text-(--color-accent-gold) font-['Inter'] text-sm uppercase tracking-[0.3em] mb-8"
        >
          My Core Capabilities
        </h2>
        <p className="text-(--color-text-primary) font-['Inter'] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-20 max-w-4xl">
          Ciò che porto nel team:
          <span className="block text-(--color-text-secondary) font-light text-xl md:text-2xl mt-4">
            Gestisco l'intero ciclo: dal primo schizzo su Figma al deployment finale.
          </span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertiseItems.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true, amount: 0.4 }}
              className="bg-(--color-background) border border-(--color-text-secondary)/15 rounded-xl p-8 flex flex-col 
                         hover:border-(--color-accent-gold) transition-colors duration-300 group"
              role="article"
              aria-labelledby={`expertise-title-${i}`}
              aria-describedby={`expertise-desc-${i}`}
            >
              <div className="text-5xl mb-6" aria-hidden="true">{item.icon}</div>
              <h3 
                id={`expertise-title-${i}`} 
                className="text-(--color-text-primary) font-['Inter'] text-2xl font-semibold mb-2"
              >
                {item.title}
              </h3>
              <p className="text-(--color-accent-gold) font-['Inter'] text-xs uppercase tracking-widest mb-4">
                {item.subtitle}
              </p>
              <p 
                id={`expertise-desc-${i}`} 
                className="text-(--color-text-secondary) font-light leading-relaxed grow"
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-8 bg-(--color-accent-gold)/5 border border-(--color-accent-gold)/20 rounded-xl text-center"
             role="status" aria-live="polite">
          <p className="text-(--color-text-primary) font-['Playfair_Display'] italic text-xl md:text-2xl leading-relaxed">
            "Creare esperienze digitali dove estetica e performance tecnica non scendono a compromessi."
          </p>
          <p className="text-(--color-accent-gold) font-['Inter'] text-sm uppercase tracking-widest mt-4">
            Obiettivo principale
          </p>
        </div>
      </div>
    </section>
  );
}