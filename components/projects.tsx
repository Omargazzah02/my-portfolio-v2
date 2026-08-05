'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, ExternalLink, Github } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { motion, useInView } from 'framer-motion'


const allProjects = [
  {
    id: 1,
    category: 'professionnel',
    title: 'Refonte Site Vitrine Koppelia',
    image: '/project-startbootstrap.png',
    description: 'Refonte complète du site vitrine avec intégration d\'un module d\'IA générative pour les formulaires.',
    tags: ['Next.js', 'Tailwind CSS', 'Supabase'],
    demo: '#',
    repo: '#',
    badge: 'Professionnel',
    company: 'Koppelia',
  },
  {
    id: 2,
    category: 'professionnel',
    title: 'Plateforme SaaS Multi-rôles',
    image: '/project-teamtrack.png',
    description: 'Plateforme SaaS avec système de rôles avancé, authentification sécurisée et gestion des utilisateurs.',
    tags: ['Next.js', 'Supabase', 'RLS'],
    demo: '#',
    repo: '#',
    badge: 'Professionnel',
    company: 'Koppelia',
  },
  {
    id: 3,
    category: 'professionnel',
    title: 'App Géolocalisation Bornes Électriques',
    image: '/project-hercules.png',
    description: 'Application multiplateforme de géolocalisation des stations de recharge électrique en temps réel.',
    tags: ['Flutter', 'Spring Boot', 'PostgreSQL'],
    demo: '#',
    repo: '#',
    badge: 'Professionnel',
    company: 'Tunisie Télécom',
  },
  {
    id: 4,
    category: 'academique',
    title: 'Start Bootstrap',
    image: '/project-startbootstrap.png',
    description: 'Site web statique développé avec Next.js et Tailwind CSS, inspiré du site Start Bootstrap.',
    tags: ['Next.js', 'Tailwind CSS'],
    demo: '#',
    repo: '#',
    badge: 'Académique',
    school: 'EEMI',
  },
  {
    id: 5,
    category: 'academique',
    title: 'Système de Gestion de Tâches',
    image: '/project-teamtrack.png',
    description: 'Plateforme collaborative de gestion de projets avec système d\'authentification et base de données.',
    tags: ['Node.js', 'React', 'MongoDB'],
    demo: '#',
    repo: '#',
    badge: 'Académique',
    school: 'ECE',
  },
  {
    id: 6,
    category: 'academique',
    title: 'Application Mobile de Fitness',
    image: '/project-hercules.png',
    description: 'Application de suivi d\'entraînement avec statistiques, plans d\'entraînement personnalisés et notifications.',
    tags: ['Flutter', 'Firebase'],
    demo: '#',
    repo: '#',
    badge: 'Académique',
    school: 'École Pluridisciplinaire',
  },
  
    {
    id: 7,
    category: 'academique',
    title: 'Application Mobile de Fitness',
    image: '/project-hercules.png',
    description: 'Application de suivi d\'entraînement avec statistiques, plans d\'entraînement personnalisés et notifications.',
    tags: ['Flutter', 'Firebase'],
    demo: '#',
    repo: '#',
    badge: 'Académique',
    school: 'École Pluridisciplinaire',
  },
  
    {
    id: 8,
    category: 'academique',
    title: 'Application Mobile de Fitness',
    image: '/project-hercules.png',
    description: 'Application de suivi d\'entraînement avec statistiques, plans d\'entraînement personnalisés et notifications.',
    tags: ['Flutter', 'Firebase'],
    demo: '#',
    repo: '#',
    badge: 'Académique',
    school: 'École Pluridisciplinaire',
  },
  
  
]

function ProjectCard({
  project,
  index,
  trackRef,
}: {
  project: (typeof allProjects)[number]
  index: number
  trackRef: React.RefObject<HTMLDivElement | null>
}) {
  const cardRef = useRef<HTMLElement>(null)

  const isInView = useInView(cardRef, {
    root: trackRef,
    amount: 0.5,
  })

  return (
    <motion.article
      ref={cardRef}
      animate={
        isInView
          ? {
            opacity: 1,
            y: 0,
            scale: 1,
          }
          : {
            opacity: 0.4,
            y: 20,
            scale: 0.97,
          }
      }
      transition={{
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
className="group flex w-full shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/50 sm:w-[85%] lg:w-[48%]"    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-border">
        <Image
          src={project.image}
          alt={`Aperçu du projet ${project.title}`}
          fill
          sizes="(min-width: 1024px) 540px, (min-width: 640px) 70vw, 88vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />

        <div className="absolute left-4 top-4 flex gap-2">
          <span className="rounded-full bg-background/90 px-3 py-1 font-mono text-xs">
            0{index + 1}
          </span>

          <span className="rounded-full bg-primary/20 px-3 py-1 font-mono text-xs text-primary">
            {project.badge}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-7">

        <h3 className="text-xl font-semibold">
          {project.title}
        </h3>

        {project.company && (
          <p className="mt-1 text-xs uppercase text-primary">
            {project.company}
          </p>
        )}

        {project.school && (
           <p className="mt-1 text-xs uppercase text-secondary-foreground">
            {project.school}
          </p>
        )}

        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border px-2.5 py-1 font-mono text-xs text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-5 border-t border-border pt-5">
          <a
            href={project.demo}
            className="inline-flex items-center gap-2 text-sm font-medium text-primary"
          >
            <ExternalLink className="h-4 w-4" />
            Démo
          </a>

          <a
            href={project.repo}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground"
          >
            <Github className="h-4 w-4" />
            Code
          </a>
        </div>

      </div>
    </motion.article>
  )
}
export function Projects() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [activeCategory, setActiveCategory] = useState<'professionnel' | 'academique'>('professionnel')

  const filteredProjects = allProjects.filter((p) => p.category === activeCategory)

  const scroll = (direction: 'left' | 'right') => {
    const track = trackRef.current
    if (!track) return

    track.scrollBy({
      left: direction === 'right' ? track.clientWidth * 0.82 : -track.clientWidth * 0.82,
      behavior: 'smooth',
    })
  }

  return (
    <section id="projets" className="scroll-mt-20 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Portfolio"
            title="Projets sélectionnés"
            description="Découvrez mes réalisations professionnelles et académiques."
          />


        </div>

        {/* Onglets de catégories */}
        <div className="mt-12 flex gap-3 border-b border-border pb-6 justify-between">
          <div>
            <button
              type="button"
              onClick={() => setActiveCategory('professionnel')}
              className={`px-4 py-2 font-medium transition-colors ${activeCategory === 'professionnel'
                  ? 'border-b-2 border-primary text-primary'
                  : 'text-muted-foreground hover:text-foreground'
                }`}
            >
              Professionnel
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('academique')}
              className={`px-4 py-2 font-medium transition-colors ${activeCategory === 'academique'
                  ? 'border-b-2 border-primary text-primary'
                  : 'text-muted-foreground hover:text-foreground'
                }`}
            >
              Académique
            </button>
          </div>
          <div className="flex gap-2" aria-label="Navigation des projets">
            <button
              type="button"
              onClick={() => scroll('left')}
              className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary hover:text-primary"
              aria-label="Voir les projets précédents"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary hover:text-primary"
              aria-label="Voir les projets suivants"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

        </div>
        {/* Carrousel des projets */}
        <div
          ref={trackRef}
          className="portfolio-scroll mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6"
          tabIndex={0}
          aria-label="Liste horizontale des projets"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              trackRef={trackRef}
            />
          ))}
          <div className="w-1 shrink-0" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
