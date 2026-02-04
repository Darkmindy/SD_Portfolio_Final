export interface Project {
  id: string;
  title: string;
  role: string;
  duration: string;
  tech: string[];
  description: string;
  performance: string;
  image: string;
  link?: string;
  repo?: string;
  type: 'wordpress' | 'react' | 'healthcare' | 'mobile';
}

export const PROJECTS_DATA: Project[] = [
  {
    id: "01",
    title: "Arredi_Italiani",
    role: "Senior Full-stack Designer",
    duration: "2024",
    tech: ["WordPress Custom", "Gutenberg", "SCSS"],
    description: "Digital showroom per Arredi Italiani sviluppato con Emme Pubblicità e SWI. Trasformazione di un catalogo fisico in un'esperienza digitale immersiva con gestione editoriale tramite blocchi custom.",
    performance: "Lighthouse: 98/100",
    image: "/projects/Arredi-italiani-browser-mockup.webp",
    link: "https://arreditaliani.it",
    type: 'wordpress'
  },
  {
    id: "02",
    title: "Soulfarm_React",
    role: "Lead Frontend Developer",
    duration: "2024",
    tech: ["React 18", "TypeScript", "Vite", "Tailwind"],
    description: "Re-engineering tecnico di un layout complesso in un'architettura a componenti. Focus sulla Type Safety, ottimizzazione del bundle e caricamento istantaneo.",
    performance: "Load Time: < 0.8s",
    image: "/projects/Soulfarm-browser-mockup.webp",
    link: "https://darkmindy.github.io/soulfarm-react/",
    repo: "https://github.com/darkmindy/soulfarm-react",
    type: 'react'
  },
  {
    id: "03",
    title: "Farmacia_Santrovaso",
    role: "UI/UX Designer & Dev",
    duration: "2023",
    tech: ["WordPress Custom", "PHP", "SCSS"],
    description: "Sviluppato con Emme Pubblicità e SWI. Un'interfaccia focalizzata su accessibilità e chiarezza informativa per i servizi farmaceutici territoriali.",
    performance: "A11Y: AA Compliant",
    image: "/projects/Farmacia-santrovaso-browser-mockup.webp",
    link: "https://www.farmaciasantrovaso.it/",
    type: 'healthcare'
  },
  {
    id: "04",
    title: "DevFest_Passport",
    role: "Flutter & UI Designer",
    duration: "2023",
    tech: ["Flutter", "Firebase", "Dart", "Pixel Art"],
    description: "Un'app companion per eventi tech con sistema di gamification. Include una 'Passport Log' per collezionare timbri digitali, una sezione missioni con achievement progressivi e una mappa interattiva dell'evento, il tutto con un'estetica nostalgica GBC.",
    performance: "Gamified UX / Real-time Sync",
    image: "/projects/devfest-app-mockup.webp", 
    repo: "https://github.com/Darkmindy/devfestlog_passport",
    type: 'mobile'
  }
];