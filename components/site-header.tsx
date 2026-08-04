'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'À propos', href: '#a-propos' },
  { label: 'Projets', href: '#projets' },
  { label: 'Expérience', href: '#experiences' },
  { label: 'Formation', href: '#formations' },
  { label: 'Avis', href: '#avis' },
  { label: 'Stack', href: '#technologies' },
  { label: 'Contact', href: '#contact' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2 font-mono text-sm font-semibold">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-primary text-primary-foreground">
            OG
          </span>
          <span className="hidden sm:inline">Omar Gazzah</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 md:inline-block"
        >
          Me contacter
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-md text-foreground md:hidden"
          aria-label="Ouvrir le menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border/60 px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
