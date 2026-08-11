"use client"

import { ExternalLink, Quote } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { useRef } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { motion, useInView } from 'framer-motion'

const testimonials = [
  {
    quote: 'J’ai eu le plaisir d’accueillir Omar en stage de développeur web et mobile au sein de mon entreprise. Dès les premiers jours, il s’est démarqué par son autonomie, sa curiosité et sa capacité à apprendre rapidement. Omar a fortement contribué à l’avancement de nos projets, apportant des solutions efficaces et de la valeur ajoutée grâce à son sérieux et son implication.',
    name: 'Alaaeddine Gharbi',
    role: 'Founder & CEO',
    company: "Ronindevo",
    initials: 'AG',
    linkedin: true
  },
  {
    quote: 'Travailler avec Omar a été une expérience très enrichissante. Tout au long de son stage, il a su s’intégrer parfaitement dans nos projets web et mobile, en faisant preuve d’une grande autonomie et d’une remarquable capacité de recherche et d’apprentissage.',
    name: 'Hajar Zahoui',
    role: 'Digital project manager',
    company: "Ronindevo",
    initials: 'HZ',
    linkedin: true
  },
  {
    quote: 'J’ai eu le plaisir de collaborer avec Omar lors de notre stage chez Caplogy. Sérieux, motivé et doté de solides compétences en développement web, il a toujours fait preuve de professionnalisme et d’un excellent esprit d’équipe. Je le recommande avec plaisir.',
    name: 'Imane El ouafy',
    role: 'Full-Stack Developer',
    company: "Caplogy",
    initials: 'AO',
    linkedin: true
  },



]


function TestimonialCard({
  testimonial,
  trackRef,
}: {
  testimonial: (typeof testimonials)[number]
  trackRef: React.RefObject<HTMLDivElement | null>
}) {
  const cardRef = useRef<HTMLElement>(null)

  const isInView = useInView(cardRef, {
    root: trackRef,
    amount: 0.5,
  })

  return (
    <motion.figure
      ref={cardRef}
      initial={false}
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
      className="flex w-full shrink-0 min-h-80 flex-col rounded-2xl border border-border bg-card p-6 md:p-8 snap-center"
    >
      <Quote
        className="h-8 w-8 text-primary"
        aria-hidden="true"
      />

      <blockquote className="mt-6 flex-1 text-base leading-relaxed text-foreground">
        “{testimonial.quote}”
      </blockquote>

      <figcaption className="mt-8 flex items-center gap-3 border-t border-border pt-5">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary font-mono text-xs font-semibold text-primary-foreground">
          {testimonial.initials}
        </span>

        <span className="flex flex-1 items-center justify-between gap-2">
          <div>
            <span className="block text-sm font-semibold">
              {testimonial.name} - {testimonial.role}
            </span>

            <span className="mt-0.5 block text-xs text-muted-foreground">
              {testimonial.company}
            </span>

          </div>


          {testimonial.linkedin && (
            <a
              href="https://www.linkedin.com/in/omar-gaz/details/recommendations/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Voir la recommandation de ${testimonial.name} sur LinkedIn`}
              className="inline-flex shrink-0 items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              <span className="hidden sm:inline">Voir sur LinkedIn</span>
              <ExternalLink className="h-4 w-4 shrink-0" />
            </a>
          )}
        </span>
      </figcaption>
    </motion.figure>
  )
}


export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    const track = trackRef.current
    if (!track) return

    const firstCard = track.querySelector('figure')
    if (!firstCard) return

    const gap = 24
    const cardWidth = firstCard.clientWidth + gap

    track.scrollBy({
      left:
        direction === 'right'
          ? cardWidth
          : -cardWidth,
      behavior: 'smooth',
    })
  }


  return (
    <section
      id="avis"
      className="scroll-mt-20 border-t border-border/60"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">

        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">

          <SectionHeading
            eyebrow="Témoignages"
            title="Ils parlent de mon travail"
            description="Quelques retours de mes collègues et responsables"
          />

          <div className="flex gap-2">

            <button
              type="button"
              onClick={() => scroll('left')}
              className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>


            <button
              type="button"
              onClick={() => scroll('right')}
              className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <ArrowRight className="h-4 w-4" />
            </button>

          </div>

        </div>

        <div className="mx-auto max-w-4xl mt-12">
          <div
            ref={trackRef}
            className="w-full portfolio-scroll mt-12 flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory"
          >

            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                testimonial={testimonial}
                trackRef={trackRef}
              />
            ))}
          </div>
        </div>



      </div>
    </section>
  )
}