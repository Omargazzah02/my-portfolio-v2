import Image from 'next/image'
import { ArrowRight, FileText, Github, Linkedin } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-mono text-xs text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Disponible pour de nouveaux projets
          </span>

          <div className="space-y-3">
            <p className="font-mono text-sm text-muted-foreground">Bonjour, je suis</p>
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Omar Gazzah
            </h1>
            <p className="text-xl font-medium text-primary sm:text-2xl">
              Développeur Full Stack Junior
            </p>
          </div>

          <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
            Je conçois et développe des applications web modernes, performantes
            et centrées sur l&apos;utilisateur, du front-end au back-end.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Me contacter
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/cv.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
            >
              <FileText className="h-4 w-4" />
              Voir mon CV
            </a>
          </div>

          <div className="flex items-center gap-4 pt-2">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-primary/10 blur-2xl" />
          <div className="overflow-hidden rounded-3xl border border-border bg-card">
            <Image
              src="/omar-portrait.png"
              alt="Portrait de Omar Gazzah"
              width={640}
              height={720}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
