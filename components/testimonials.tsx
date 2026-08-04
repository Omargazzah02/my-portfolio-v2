import { Quote } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const testimonials = [
  {
    quote:
      'Omar comprend rapidement les besoins et transforme les idées en interfaces claires, modernes et faciles à utiliser.',
    name: 'Nom du client',
    role: 'Product Manager',
    initials: 'NC',
  },
  {
    quote:
      'Un développeur sérieux, autonome et attentif aux détails. La communication a été fluide pendant toute la mission.',
    name: 'Nom du collaborateur',
    role: 'Lead Developer',
    initials: 'NC',
  },
  {
    quote:
      'Le projet a été livré avec une base technique propre, responsive et pensée pour évoluer facilement.',
    name: 'Nom du responsable',
    role: 'Responsable digital',
    initials: 'NR',
  },
]

export function Testimonials() {
  return (
    <section id="avis" className="scroll-mt-20 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <SectionHeading
          eyebrow="Témoignages"
          title="Ils parlent de mon travail"
          description="Quelques retours sur ma façon de travailler, ma communication et la qualité des solutions livrées."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.role} className="flex min-h-72 flex-col rounded-2xl border border-border bg-card p-6 md:p-7">
              <Quote className="h-8 w-8 text-primary" aria-hidden="true" />
              <blockquote className="mt-6 flex-1 text-base leading-relaxed text-foreground">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3 border-t border-border pt-5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary font-mono text-xs font-semibold text-primary-foreground">
                  {testimonial.initials}
                </span>
                <span>
                  <span className="block text-sm font-semibold">{testimonial.name}</span>
                  <span className="mt-0.5 block text-xs text-muted-foreground">{testimonial.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          Témoignages de démonstration — à remplacer par vos avis authentiques.
        </p>
      </div>
    </section>
  )
}
