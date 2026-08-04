import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Projects } from '@/components/projects'
import { Experiences } from '@/components/experiences'
import { Formations } from '@/components/formations'
import { Testimonials } from '@/components/testimonials'
import { Skills } from '@/components/skills'
import { Technologies } from '@/components/technologies'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experiences />
        <Formations />
        <Skills />
        <Testimonials />
        <Technologies />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}
