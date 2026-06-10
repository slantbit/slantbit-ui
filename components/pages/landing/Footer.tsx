import Link from "next/link"
import { BookOpen } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <Link href="/" className="flex items-center gap-2 text-sm font-medium text-foreground">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[oklch(0.65_0.18_40)]">
              <BookOpen className="h-3.5 w-3.5 text-white" />
            </div>
            Slantbit
          </Link>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <Link href="#features" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Features</Link>
            <Link href="#pricing" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Pricing</Link>
            <Link href="/login" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Log in</Link>
            <Link href="/register" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Sign up</Link>
          </nav>

          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Slantbit
          </p>
        </div>
      </div>
    </footer>
  )
}
