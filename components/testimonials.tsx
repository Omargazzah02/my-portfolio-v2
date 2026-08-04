"use client"

import { Quote } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { useRef } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { motion, useInView } from 'framer-motion'

const testimonials = [
  {
    quote: '1',
    name: 'Nom du client',
    role: 'Product Manager',
    initials: 'NC',
  },
  {
    quote: '2',
    name: 'Nom du collaborateur',
    role: 'Lead Developer',
    initials: 'NC',
  },
  {
    quote: '3',
    name: 'Nom du responsable',
    role: 'Responsable digital',
    initials: 'NR',
  },
  {
    quote: '4',
    name: 'Nom du responsable 2',
    role: 'Responsable digital 2',
    initials: 'NR',
  },
  {
    quote: '5',
    name: 'Nom du responsable 3',
    role: 'Responsable digital 3',
    initials: 'NR',
  },
  {
    quote: '6',
    name: 'Nom du responsable 4',
    role: 'Responsable digital 4',
    initials: 'NR',
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
      className="flex w-full sm:w-[48%] md:w-[31.5%] shrink-0 min-h-80 flex-col rounded-2xl border border-border bg-card p-6 md:p-7"
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

        <span>
          <span className="block text-sm font-semibold">
            {testimonial.name}
          </span>

          <span className="mt-0.5 block text-xs text-muted-foreground">
            {testimonial.role}
          </span>
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
            description="Quelques retours sur ma façon de travailler, ma communication et la qualité des solutions livrées."
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


        <div
          ref={trackRef}
          className="portfolio-scroll mt-12 flex overflow-x-auto gap-6 pb-4"
        >

          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              trackRef={trackRef}
            />
          ))}

        </div>


        <p className="mt-6 text-center text-xs text-muted-foreground">
          Témoignages de démonstration — à remplacer par vos avis authentiques.
        </p>

      </div>
    </section>
  )
}