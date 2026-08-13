import { SectionHeading } from '@/components/section-heading'

const stats = [
  { value: "10+", label: "Projets réalisés" },
  { value: "2+", label: "Années d'expérience pratique" },
  { value: "15+", label: "Compétences techniques " },
]

export function About() {
  return (
    <section id="a-propos" className="scroll-mt-20 border-t border-border/60">
   

        <div className="mx-auto max-w-6xl px-6 py-20 flex flex-col md:flex-row md:gap-12 gap-6 items-start">
          <div className="space-y-4 flex-2">
                 <SectionHeading
          eyebrow="À propos"
          title="Passionné par le code et l'innovation"
        />
            <p className="text-muted-foreground">
              {"Développeur web passionné, je conçois des applications modernes, performantes et centrées sur l’utilisateur. Fort de mon parcours académique en informatique et de deux années d’expérience professionnelle acquises à travers mes stages, ainsi que de plusieurs projets réalisés en front-end et en back-end, j’ai développé une solide maîtrise de technologies telles que React.js, Next.js, Node.js, Supabase et Django."}
            </p>
            <p className="text-muted-foreground">
             {"Curieux et rigoureux, je veille à produire un code propre, maintenable, sécurisé et conforme aux bonnes pratiques, tout en développant des solutions web innovantes qui répondent efficacement aux besoins des utilisateurs."}
            </p>
          </div>

          <div className="flex flex-col gap-4 md:flex-1 w-full">
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
    </section>
  )
}
