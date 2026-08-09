import { GraduationCap, MapPin, Calendar } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const formations = [
  {
    id: 1,
    diplome: 'Mastère lead développeur fullstack',
    ecole: "École Européenne des Métiers de l'Internet (EEMI)",
    lieu: 'Lyon, France',
    periode: '2024 – 2026',
    niveau: 'Bac+5',
  },
  {
    id: 2,
    diplome: '3ème année de licence développeur concepteur logiciel',
    ecole: 'ECE - École d\'ingénieurs',
    lieu: 'Lyon, France',
    periode: '2023 – 2024',
    niveau: 'Bac+3',
    estObten: true,
  },
  {
    id: 3,
    diplome: '1ère et 2ème année de licence en génie logiciel',
    ecole: 'École Pluridisciplinaire Internationale',
    lieu: 'Sousse, Tunisie',
    periode: '2021 – 2023',
    niveau: 'Bac+2',
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
                    <div className="flex-1 space-y-3">
                      <h3 className="text-lg font-semibold md:text-xl text-balance">{formation.diplome}</h3>
                      <p className="font-mono text-sm font-medium text-primary">{formation.ecole}</p>
                      <div className="w-16 rounded-full bg-secondary py-1 font-mono text-xs font-semibold text-secondary-foreground text-center">
                        {formation.niveau}
                      </div>
                      {/*<p className="mt-2 text-sm text-muted-foreground">{formation.description}</p> */}
                    </div>
                  </div>

                  {/* Badge de diplôme obtenu */}
                  {/*    {formation.estObten && (
                    <div className="mt-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      ✓ Diplôme obtenu
                    </div>
                  )} */}
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
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
