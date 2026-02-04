// 1. Importa le immagini come asset (Vite gestirà l'URL corretto per il deploy)
import imgArredi from '../assets/projects/Arredi-italiani-browser-mockup.webp';
import imgSoulfarm from '../assets/projects/Soulfarm-browser-mockup.webp';
import imgFarmacia from '../assets/projects/Farmacia-santrovaso-browser-mockup.webp';
import imgDevFest from '../assets/projects/devfest-app-mockup.webp';

export interface Project {
  id: string;
  title: string;
  role: string;
  duration: string;
  tech: string[];
  description: string;
  performance: string;
  image: string; // Ora conterrà l'URL risolto da Vite
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
    description: "Digital showroom per Arredi Italiani sviluppato con Emme Pubblicità e SWI. Trasformazione di un catalogo fisico in un'esperienza digitale immersiva.",
    performance: "Lighthouse: 98/100",
    image: imgArredi, // Usiamo la variabile importata
    link: "https://arreditaliani.it",
    type: 'wordpress'
  },
  {
    id: "02",
    title: "Soulfarm_React",
    role: "Lead Frontend Developer",
    duration: "2024",
    tech: ["React 18", "TypeScript", "Vite", "Tailwind"],
    description: "Re-engineering tecnico di un layout complesso in un'architettura a componenti. Focus sulla Type Safety e caricamento istantaneo.",
    performance: "Load Time: < 0.8s",
    image: imgSoulfarm,
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
    description: "Sviluppato con Emme Pubblicità e SWI. Un'interfaccia focalizzata su accessibilità e chiarezza informativa per i servizi farmaceutici.",
    performance: "A11Y: AA Compliant",
    image: imgFarmacia,
    link: "https://www.farmaciasantrovaso.it/",
    type: 'healthcare'
  },
  {
    id: "04",
    title: "DevFest_Passport",
    role: "Flutter & UI Designer",
    duration: "2023",
    tech: ["Flutter", "Firebase", "Dart", "Pixel Art"],
    description: "App companion con sistema di gamification. Include una 'Passport Log' per collezionare timbri digitali e una mappa interattiva con estetica GBC.",
    performance: "Gamified UX / Real-time Sync",
    image: imgDevFest, 
    repo: "https://github.com/Darkmindy/devfestlog_passport",
    type: 'mobile'
  }
];