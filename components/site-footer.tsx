export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} Omar Gazzah. Tous droits réservés.</p>
        <p className="font-mono text-xs">Conçu &amp; développé avec Next.js</p>
      </div>
    </footer>
  )
}
