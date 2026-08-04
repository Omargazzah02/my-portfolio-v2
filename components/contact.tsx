import { Mail, Phone, Github, Linkedin, ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const channels = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'in/omar-gazzah',
    href: 'https://linkedin.com',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/omar-gazzah',
    href: 'https://github.com',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'omar.gazzah@email.com',
    href: 'mailto:omar.gazzah@email.com',
  },
  {
    icon: Phone,
    label: 'Téléphone',
    value: '+216 00 000 000',
    href: 'tel:+21600000000',
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
            description="Un projet en tête ou une opportunité à partager ? N'hésitez pas à me contacter, je vous répondrai rapidement."
            align="center"
          />

          <div className="mx-auto mt-10 grid max-w-2xl gap-4 sm:grid-cols-2">
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
