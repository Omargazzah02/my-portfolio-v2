import { Mail, Phone, Github, Linkedin, ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const channels = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'in/omar-gaz',
    href: 'https://www.linkedin.com/in/omar-gaz/',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/Omargazzah02',
    href: 'https://github.com/Omargazzah02',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'gazzahomar2001@gmail.com',
    href: 'mailto:gazzahomar2001@gmail.com',
  },
  {
    icon: Phone,
    label: 'Téléphone',
    value: '+33 7 67 70 86 03',
    href: 'tel:+33767708603',
  },
]

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="rounded-3xl border border-border bg-card p-8 sm:p-12">
          <SectionHeading
            eyebrow="Contact"
            title="Travaillons ensemble"
            description="Vous recherchez un profil motivé pour renforcer votre équipe ou vous avez un projet à concrétiser ? N’hésitez pas à me contacter."
            align="center"
          />

          <div className="flex flex-col gap-4 pt-8 sm:pt-12 md:justify-center ">
            {channels.map((channel) => {
              const Icon = channel.icon
              return (
                <a
                  key={channel.label}
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl border border-border bg-background p-4 transition-colors hover:border-primary/50"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-medium">
                      {channel.label}
                    </span>
                    <span className="block truncate text-sm text-muted-foreground">
                      {channel.value}
                    </span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
