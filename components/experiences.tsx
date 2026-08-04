import { Briefcase, MapPin, Calendar } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const experiences = [
  {
    id: 1,
    poste: 'Développeur Full-Stack (Stage Alterné)',
    entreprise: 'Koppelia',
    periode: 'Déc. 2025 – Juil. 2026',
    lieu: 'Lille, France',
    missions: [
      'Refonte du site vitrine avec design moderne et optimisation SEO',
      'Création d\'une plateforme SaaS multi-rôles avec système de permissions avancé',
      'Intégration d\'un module d\'IA générative pour automatisation des formulaires',
      'Mise en place de tests CI/CD avec GitHub Actions et déploiement en production',
    ],
    competences: ['Next.js', 'shadcn/ui', 'Supabase', 'Deno.js', 'RLS', 'GitHub Actions', 'CI/CD'],
    resultat: 'Application déployée en production avec automatisation complète des workflows et couverture de tests robuste.',
  },
  {
    id: 2,
    poste: 'Développeur Mobile & Web (Stage)',
    entreprise: 'Tunisie Télécom',
    periode: 'Mai 2024 – Sept. 2024',
    lieu: 'Sousse, Tunisie',
    missions: [
      'Conception et développement d\'une application multiplateforme de géolocalisation',
      'Création d\'une API REST sécurisée avec authentification et gestion des données',
      'Intégration de cartes interactives et algorithmes de routage en temps réel',
      'Synchronisation des données entre applications mobile et backend',
    ],
    competences: ['Flutter', 'Spring Boot', 'Java', 'Angular', 'PostgreSQL', 'API REST', 'Maps'],
    resultat: 'Application fonctionnelle permettant la cartographie et le guidage en temps réel vers les 2000+ bornes de recharge.',
  },
]

export function Experiences() {
  return (
    <section id="experiences" className="scroll-mt-20 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <SectionHeading
          eyebrow="Carrière"
          title="Expériences professionnelles"
          description="Des stages et missions réalisées dans un contexte professionnel, avec responsabilités techniques et impact mesurable."
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
              <div className="mt-8">
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
              <div className="mt-6">
                <h4 className="font-semibold text-foreground">Stack Technologique</h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {exp.competences.map((comp) => (
                    <span key={comp} className="rounded-full bg-secondary px-3 py-1.5 font-mono text-xs font-medium text-secondary-foreground">
                      {comp}
                    </span>
                  ))}
                </div>
              </div>

              {/* Résultat */}
              <div className="mt-6 rounded-lg border border-border bg-secondary/30 p-4">
                <p className="font-mono text-xs font-semibold uppercase tracking-wide text-secondary-foreground">Résultat / Impact</p>
                <p className="mt-2 text-sm text-foreground">{exp.resultat}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
