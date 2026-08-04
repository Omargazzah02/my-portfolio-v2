import { PenTool, Code2, Palette, Cog, Bug } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const services = [
  {
    icon: PenTool,
    title: 'Conception',
    items: [
      'Bases de données relationnelles',
      'Diagrammes UML',
      'Architecture logicielle',
      'Conception fonctionnelle',
      'Design patterns (MVC, MVVM, MVP)',
    ],
  },
  {
    icon: Code2,
    title: 'Développement',
    items: [
      'Interfaces responsives',
      'Sites web full stack',
      'Applications mobiles modernes',
      'Sites e-commerce',
      'API sécurisées',
    ],
  },
  {
    icon: Palette,
    title: 'Design (UI/UX)',
    items: [
      'Wireframes',
      'Maquettes',
      'Prototypes interactifs',
      'Chartes graphiques',
    ],
  },
  {
    icon: Cog,
    title: 'DevOps & CI/CD',
    items: [
      'Orchestration des pipelines',
      'Automatisation des tests',
      'Gestion des versions du code',
      'Conteneurisation des applications',
      'Supervision des serveurs',
    ],
  },
  {
    icon: Bug,
    title: 'Tests',
    items: [
      'Tests fonctionnels',
      'Tests unitaires',
      'Tests d\u2019intégration',
      'Tests End-to-End (E2E)',
      'Tests de performance',
      'Tests de sécurité',
    ],
  },
]

export function Skills() {
  return (
    <section id="services" className="scroll-mt-20 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <SectionHeading
          eyebrow="Services"
          title="Ce que je peux faire"
          description="De la conception à la mise en production, j'interviens sur l'ensemble du cycle de développement."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                </div>
                <ul className="mt-5 space-y-2.5">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-muted-foreground"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
