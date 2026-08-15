import { Briefcase, MapPin, Calendar } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const experiences = [
  {
    id: 1,
    poste: 'Développeur full-stack – Stage alterné',
    entreprise: 'Koppelia',
    periode: 'déc. 2025 - juil. 2026 · 8 mois',
    lieu: 'Lille, France',
    project: "Développement d’un dashboard de gestion multi-rôles et refonte du site vitrine de l’entreprise",
    missions: [
      'Création d’interfaces front-end avec Next.js et shadcn/ui depuis Figma.',
      'Développement de fonctionnalités back-end avec Supabase et Deno.js, sécurisées via RLS.',
      'Mise en place d’un workflow CI/CD avec GitHub Actions, tests et revues de code.',
      'Développement d’une fonctionnalité IA pour le pré-remplissage personnalisé des formulaires.'
    ]
  },
  {
    id: 2,
    poste: 'Développeur full-stack – Stage',
    entreprise: 'Caplogy',
    periode: 'sept. 2025 - nov. 2025 · 3 mois',
    lieu: 'Vélizy-Villacoublay, France',
    project: "Participation au développement et à la maintenance du site web de l’entreprise",
    missions: [
      "Développement de composants réutilisables afin de faciliter la maintenance avec Next.js.",
      "Implémentation de fonctionnalités back-end sécurisées avec Django."
    ],
  },
  {
    id: 3,
    poste: 'Développeur web et mobile – Stage',
    entreprise: 'Ronindevo',
    periode: 'mai 2025 - juil. 2025 · 3 mois',
    lieu: 'Lyon, France',
    missions: [
      "Création d’interfaces modernes et responsives avec Next.js, TailwindCSS et React Native.",
      "Développement de composants réutilisables pour optimiser le code et faciliter la maintenance.",
      "Déploiement automatisé et validation de la qualité avec Vercel, GitHub, Jest et Cypress.",
      "Intégration d’API REST/GraphQL pour la gestion et l’exploitation des données JSON."
    ],
  },
  {
    id: 4,
    poste: 'Développeur web et mobile – Stage',
    entreprise: 'Tunisie Telecom',
    periode: 'mai 2024 - sept. 2024 · 5 mois',
    lieu: 'Sousse, Tunisie',
    project: "Création d'une application multiplateforme pour la localisation des stations de recharge électrique",
    missions: [
      "Analyse des besoins utilisateurs et proposition de solutions techniques adaptées.",
      "Développement et sécurisation de la partie back-end avec Spring Boot et Java.",
      "Développement des interfaces utilisateur interactives en utilisant Flutter et Angular."
    ],
  },
]

export function Experiences() {
  return (
    <section id="experiences" className="scroll-mt-20 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <SectionHeading
          eyebrow="Carrière"
          title="Expériences professionnelles"
          description="Découvrez mon parcours professionnel et les projets sur lesquels j’ai travaillé."
        />

        <div className="mt-12 divide-y divide-border border-y border-border">
          {experiences.map((exp, index) => (
            <article key={exp.id} className="py-8 md:py-10">
              {/* En-tête */}
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-primary" />
                    <h3 className="text-lg font-semibold md:text-xl">{exp.poste}</h3>
                  </div>
                  <p className="mt-2 font-mono text-sm font-medium text-primary">{exp.entreprise}</p>
                </div>
                <div className="flex flex-col gap-2 text-sm text-muted-foreground md:text-right">
                  <div className="flex items-center gap-2 md:justify-end">
                    <Calendar className="h-4 w-4" />
                    <span>{exp.periode}</span>
                  </div>
                  <div className="flex items-center gap-2 md:justify-end">
                    <MapPin className="h-4 w-4" />
                    <span>{exp.lieu}</span>
                  </div>
                </div>
              </div>



              {/* Missions */}
              <div className="mt-6">
                {exp.project && (<h4 className="font-semibold text-foreground">Projet : {exp.project}</h4>)}
                <h4 className="font-semibold text-foreground">Missions & Contributions</h4>
                <ul className="mt-3 space-y-2">
                  {exp.missions.map((mission, idx) => (
                    <li key={idx} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{mission}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Compétences */}
              {/* <div className="mt-6">
                <h4 className="font-semibold text-foreground">Stack Technologique</h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {exp.competences.map((comp) => (
                    <span key={comp} className="rounded-full bg-secondary px-3 py-1.5 font-mono text-xs font-medium text-secondary-foreground">
                      {comp}
                    </span>
                  ))}
                </div>
              </div>*/}

              {/* Résultat */}
              {/* <div className="mt-6 rounded-lg border border-border bg-secondary/30 p-4">
                <p className="font-mono text-xs font-semibold uppercase tracking-wide text-secondary-foreground">Résultat / Impact</p>
                <p className="mt-2 text-sm text-foreground">{exp.resultat}</p>
              </div>*/}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
