import { SectionHeading } from '@/components/section-heading'

const groups = [
  {
    label: 'Front-end',
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS'],
  },
  {
    label: 'Back-end',
    items: ['PHP', 'Python', 'Spring Boot', 'Express.js', 'Symfony', 'Django'],
  },
  {
    label: 'Bases de données',
    items: ['MySQL', 'PostgreSQL'],
  },
  {
    label: 'Outils & DevOps',
    items: ['GitHub', 'Docker', 'Postman', 'Figma', 'Jest', 'Cypress'],
  },
]

export function Technologies() {
  return (
    <section id="technologies" className="scroll-mt-20 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <SectionHeading
          eyebrow="Stack technique"
          title="Technologies"
          description="Les langages, frameworks et outils que j'utilise au quotidien."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {groups.map((group) => (
            <div
              key={group.label}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <h3 className="font-mono text-sm font-medium text-primary">
                {group.label}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-border bg-background px-3 py-1.5 text-sm text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
