import { SectionHeading } from '@/components/section-heading'

const stats = [
  { value: '10+', label: 'Projets réalisés' },
  { value: '3+', label: 'Années de pratique' },
  { value: '15+', label: 'Technologies maîtrisées' },
]

export function About() {
  return (
    <section id="a-propos" className="scroll-mt-20 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <SectionHeading
          eyebrow="À propos"
          title="Passionné par le code et l'innovation"
        />

        <div className="mt-10 grid gap-12 md:grid-cols-[1.5fr_1fr]">
          <div className="space-y-4 text-pretty leading-relaxed text-muted-foreground">
            <p>
              Développeur web passionné, je conçois des applications modernes,
              performantes et centrées sur l&apos;utilisateur. Fort d&apos;une
              formation en informatique et de plusieurs projets réalisés en
              front-end et back-end, j&apos;ai acquis une solide maîtrise des
              technologies telles que HTML, CSS, JavaScript et PHP, ainsi que
              des frameworks comme React, Symfony ou Node.js.
            </p>
            <p>
              Curieux et rigoureux, je veille à proposer un code propre,
              maintenable et conforme aux bonnes pratiques. Mon objectif :
              développer des solutions web innovantes qui répondent efficacement
              aux besoins des utilisateurs.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 md:grid-cols-1">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-border bg-card p-5"
              >
                <div className="text-3xl font-bold text-primary">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
