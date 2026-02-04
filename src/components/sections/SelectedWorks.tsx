import { motion } from 'framer-motion';
import { PROJECTS_DATA, type Project } from '../../lib/projects';

export default function SelectedWorks() {
  return (
    <section id="lavori" className="bg-[#1A1A1A] py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Sezione */}
        <div className="mb-24">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#D4AF37] font-mono text-xs uppercase tracking-[0.4em] mb-4"
          >
            Case Studies // 10+ Years Experience
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-white text-4xl md:text-6xl font-extrabold tracking-tighter leading-none"
          >
            Selected <span className="font-serif italic font-light text-[#D4AF37]">Archive.</span>
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-48">
          {PROJECTS_DATA.map((project: Project, index: number) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 lg:gap-24 items-center`}
            >
              
              {/* Visual Container */}
              <div className="w-full lg:w-3/5">
                <div className="relative overflow-hidden rounded-2xl group cursor-pointer bg-[#252525] shadow-2xl border border-white/5">
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                    className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                  
                  {/* Badge Performance */}
                  <div className="absolute top-6 right-6">
                    <div className="bg-[#1A1A1A]/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full">
                      <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-[0.2em]">
                        {project.performance}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-2/5 space-y-8">
                <div className="flex items-center gap-4">
                  <span className="text-[#D4AF37] font-mono text-sm font-bold tracking-widest">{project.id}</span>
                  <div className="h-px w-12 bg-white/10" />
                  <span className="text-white/40 font-mono text-[10px] uppercase tracking-widest">
                    {project.type === 'react' ? 'Technical Mastery' : 
                     project.type === 'mobile' ? 'Mobile Development' : 'Agency Collaboration'}
                  </span>
                </div>

                <h3 className="text-white text-3xl md:text-5xl font-bold tracking-tight uppercase leading-tight">
                  {project.title.replace(/_/g, ' ')}
                </h3>

                <div className="space-y-4">
                  <p className="text-[#C0C0C0] text-lg font-light leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Focus Dinamico */}
                  <span className="block text-white/60 text-sm italic border-l-2 border-[#D4AF37] pl-4 py-1">
                    {project.type === 'react' && "Focus: Architettura a componenti, Type Safety e Vite."}
                    {project.type === 'wordpress' && "Focus: Sviluppo blocchi Gutenberg custom e performance."}
                    {project.type === 'healthcare' && "Focus: UI/UX Accessibility e conformità normativa."}
                    {project.type === 'mobile' && "Focus: Flutter UI Custom e Firebase Realtime Auth."}
                  </span>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono text-white/70 uppercase">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="pt-6 flex flex-wrap gap-8">
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer" className="group/link text-white text-xs font-bold uppercase tracking-[0.3em]">
                      <span className="border-b-2 border-[#D4AF37] pb-1 group-hover:text-[#D4AF37] transition-colors">Live Project</span>
                      <span className="ml-2 inline-block transform group-hover/link:translate-x-1 transition-transform">↗</span>
                    </a>
                  )}
                  {project.repo && (
                    <a href={project.repo} target="_blank" rel="noreferrer" className="group/link text-white/50 text-xs font-bold uppercase tracking-[0.3em] hover:text-white transition-colors">
                      <span className="border-b-2 border-white/10 pb-1">
                        {project.type === 'mobile' ? 'View 8-bit Code 👾' : 'GitHub Source'}
                      </span>
                    </a>
                  )}
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}