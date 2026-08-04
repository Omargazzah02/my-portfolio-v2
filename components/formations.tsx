import { GraduationCap, MapPin, Calendar } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const formations = [
  {
    id: 1,
    diplome: 'Mastère Lead Développeur Full-Stack',
    ecole: 'École Européenne des Métiers de l\'Internet (EEMI)',
    lieu: 'Lyon, France',
    periode: '2024 – 2026',
    niveau: 'Bac+5',
    description: 'Formation spécialisée en développement full-stack avec focus sur les architectures modernes, les bonnes pratiques et le leadership technique.',
  },
  {
    id: 2,
    diplome: '3ème année de Licence Développeur Concepteur Logiciel',
    ecole: 'ECE - École d\'Ingénieurs',
    lieu: 'Lyon, France',
    periode: '2023 – 2024',
    niveau: 'Bac+3',
    description: 'Diplôme obtenu. Formation en génie logiciel couvrant l\'analyse, la conception et le développement d\'applications complexes.',
    estObten: true,
  },
  {
    id: 3,
    diplome: '1ère et 2ème année de Licence Génie Logiciel',
    ecole: 'École Pluridisciplinaire Internationale',
    lieu: 'Sousse, Tunisie',
    periode: '2021 – 2023',
    niveau: 'Bac+2',
    description: 'Formation fondamentale en informatique, algorithmique et programmation orientée objet avec introduction aux technologies web.',
  },
]

export function Formations() {
  return (
    <section id="formations" className="scroll-mt-20 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <SectionHeading
          eyebrow="Éducation"
          title="Formations"
          description="Un parcours académique progressif en informatique et développement, alliant théorie fondamentale et pratique appliquée."
        />

        <div className="mt-12 space-y-6">
          {formations.map((formation) => (
            <article
              key={formation.id}
              className="group relative rounded-xl border border-border bg-card/50 p-6 transition-all hover:border-primary/50 hover:bg-card/80 md:p-7"
            >
              <div className="grid gap-6 md:grid-cols-[1fr_auto]">
                {/* Contenu principal */}
                <div>
                  <div className="flex items-start gap-3">
                    <GraduationCap className="mt-1 h-5 w-5 text-primary shrink-0" />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold md:text-xl text-balance">{formation.diplome}</h3>
                      <p className="mt-1 font-mono text-sm font-medium text-primary">{formation.ecole}</p>
                      <p className="mt-2 text-sm text-muted-foreground">{formation.description}</p>
                    </div>
                  </div>

                  {/* Badge de diplôme obtenu */}
                  {formation.estObten && (
                    <div className="mt-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      ✓ Diplôme obtenu
                    </div>
                  )}
                </div>

                {/* Informations latérales */}
                <div className="flex flex-col gap-3 text-sm text-muted-foreground md:text-right">
                  <div className="flex items-center gap-2 md:justify-end">
                    <Calendar className="h-4 w-4 shrink-0" />
                    <span className="font-mono">{formation.periode}</span>
                  </div>
                  <div className="flex items-center gap-2 md:justify-end">
                    <MapPin className="h-4 w-4 shrink-0" />
                    <span>{formation.lieu}</span>
                  </div>
                  <div className="rounded-full bg-secondary px-3 py-1 font-mono text-xs font-semibold text-secondary-foreground text-center md:text-right">
                    {formation.niveau}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
