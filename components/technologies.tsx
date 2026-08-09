import { SectionHeading } from '@/components/section-heading'

const groups = [
  {
    label: 'Front-end',
    items: ["HTML", "CSS", "React", "Next.js", "Vue.js", "Tailwind CSS"],
  },
  {
    label: 'Back-end & Bases de données',
    items: ["Node.js", "Django", "Spring Boot", "Supabase", "MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    label: 'Langages de programmation',
    items: ["JavaScript", "Java", "Python", "PHP", "Dart"]
    ,
  },
  {
    label: 'DevOps & Qualité',
    items: ["GitHub", "GitHub Actions", "Ansible", "Docker", "Kubernetes", "Terraform", "Jest", "Cypress"]
  },
]

export function Technologies() {
  return (
    <section id="technologies" className="scroll-mt-20 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <SectionHeading
          eyebrow="Stack technique"
          title="Technologies"
          description="Les langages, frameworks et outils que j’ai utilisés ou que j’utilise au quotidien."
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
