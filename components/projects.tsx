'use client'

import Image from 'next/image'
import { useRef, useState, useEffect } from 'react'
import { ArrowLeft, ArrowRight, ExternalLink, Github } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { motion, useInView } from 'framer-motion'


const allProjects = [
  {
    id: 1,
    category: 'professionnel',
    title: 'Site web Koppelia',
    image: '/projects/koppelia-site.png',
    description: "Refonte complète du site vitrine de Koppelia et développement de son dashboard de gestion.",
    tags: ['Next.js', 'Tailwind CSS', 'Supabase' , 'CI/CD'],
    demo: 'https://koppelia.com/',
    company: 'Koppelia',
  },
    {
    id: 2,
    category: 'professionnel',
    title: 'Catalogue des formations',
    image: '/projects/caplogy.png',
    description: 'Développement d’un module web de gestion des formations et certifications, avec une page de détails dédiée à chaque formation.',
    tags: ['Next.js', 'Tailwind CSS', 'Django', 'API Airtable'],
    demo: 'https://caplogy.com/formationscertifs/',
    company: 'Caplogy',
  },
  {
    id: 3,
    category: 'academique',
    title: 'Plateforme BURGERITO',
    image: '/projects/burgerito.png',
    description: 'Développement de la plateforme BURGERITO avec authentification des utilisateurs et gestion des commandes et des paniers de burgers.',
    tags: ['Next.js', 'Tailwind CSS', 'JavaScript'],
    demo: 'https://burgerito-app-user.vercel.app/',
    repo: 'https://github.com/Omargazzah02/burgerito-app',
    school: 'EEMI',
  },


     {
    id: 4,
    category: 'academique',
    title: 'Plateforme des Artisans Producteurs',
    image: '/projects/pap.png',
    description: 'Développement en équipe d’une plateforme pour le client PAP, selon la méthodologie GitHub Flow et les bonnes pratiques de CI/CD.',
    tags: ['Next.js', 'Odoo', 'GitHub Actions', 'Jest', 'Vercel'],
    demo: 'https://comptoir-artisan.vercel.app/',
    repo : "https://github.com/AeonPSR/workshop2_M2",
    school: 'EEMI',
  },


   {
    id: 5,
    category: 'academique',
    title: 'Scoutify',
    image: '/projects/scoutify.png',
    description: 'Développement de la plateforme Scoutify pour la génération de CV sportifs via un formulaire, avec un espace d’administration pour la gestion des logos, badges et l’export PDF.',
    tags: ['Next.js', 'Tailwind CSS', 'SQLite', 'API REST'],
    demo: 'https://workshop-m2.vercel.app/',
    repo : "https://github.com/AeonPSR/workshop-m2",
    school: 'EEMI',
  },

  
   {
    id: 6,
    category: 'academique',
    title: 'OWASP Juice Shop',
    image: '/projects/juice-shop.png',
    description: 'Recréation du site web OWASP Juice Shop, dans le respect des meilleures pratiques de sécurité web, avec correction des principales vulnérabilités identifiées dans l’OWASP Top 10.',
    tags: ["Next.js", "Node.js", "Sécurité web"],
    repo : "https://github.com/Omargazzah02/owasp-juice.shop",
    school: 'EEMI',
  },


     {
    id: 7,
    category: 'professionnel',
    title: 'Plateforme Syndico',
    image: '/projects/syndico.png',
    description: 'Développement en équipe d’une plateforme de gestion financière et administrative des copropriétaires d’un immeuble.',
    tags: ["Next.js", "Django", "Python"],
    repo : "https://github.com/Omargazzah02/syndico",
    company: 'Code Time',
  },


    {
    id: 8,
    category: 'professionnel',
    title: 'Application Findme',
    image: '/projects/findme.png',
    description: 'Développement d’une application mobile destinée aux conducteurs de véhicules électriques, permettant de localiser les bornes de recharge adaptées à leur position et à leurs besoins.',
    tags: ["Flutter", "Spring Boot", "Java", "MySQL"],
    demo :"https://drive.google.com/file/d/1rgX2-bvB8PCGfgr_h0o6MCzUNmNmQtfa/view",
    repo : "https://github.com/Omargazzah02/findme",
    company: 'Tunisie Telecom',
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
          <span
            className={`rounded-full bg-gray-300 px-3 py-1 font-mono text-xs ${project.category === "professionnel" ? "text-blue-700" : "text-green-700"
              }`}
          >
            {project.category === "professionnel" ? "Professionnel" : "Académique"}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-7">

        <h3 className="text-xl font-semibold">
          {project.title}
        </h3>

        {project.company && (
          <p className="mt-1 text-xs text-primary">
            {"Entreprise : "}
            {project.company}
          </p>
        )}

        {project.school && (
          <p className="mt-1 text-xs text-secondary-foreground">
            {"École : "}
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
         {project.demo && (  <a
            href={project.demo}
            target="_blank"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary"
          >
            <ExternalLink className="h-4 w-4" />
            Démo
          </a>)}

         {project.repo && ( <a
            href={project.repo}
            target="_blank"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground"
          >
            <Github className="h-4 w-4" />
            Code
          </a>)}
        </div>

      </div>
    </motion.article>
  )
}
export function Projects() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [activeCategory, setActiveCategory] = useState<'all' | 'professionnel' | 'academique'>('all')

  const filteredProjects = activeCategory === 'all'
    ? allProjects
    : allProjects.filter((p) => p.category === activeCategory)

    useEffect(() => {
    if (trackRef.current) {
      trackRef.current.scrollTo({
        left: 0,
        behavior: 'smooth' 
      })
    }
  }, [activeCategory])

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
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 font-medium transition-colors ${activeCategory === 'all'
                ? 'border-b-2 border-primary text-primary'
                : 'text-muted-foreground hover:text-foreground'
                }`}
            >
              Tous les projets
            </button>

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
