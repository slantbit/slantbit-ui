"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen, Menu, X } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { ThemeModeToggle } from "@/components/ui/theme-mode"

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-semibold text-foreground">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[oklch(0.65_0.18_40)]">
            <BookOpen className="h-4 w-4 text-white" />
          </div>
          <span className="text-base">Slantbit</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</Link>
          <Link href="/how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">How it works</Link>
          <Link href="/pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-2 md:flex">
              <ThemeModeToggle/>

          <Button variant="ghost" size="sm" asChild>
            <Link href="/login">Log in</Link>
          </Button>
          <Button size="sm" className="bg-[oklch(0.65_0.18_40)] text-white hover:bg-[oklch(0.60_0.18_40)]" asChild>
            <Link href="/register">Get started</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="flex items-center justify-center rounded-md p-1.5 text-muted-foreground hover:text-foreground md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={cn(
        "border-t border-border/40 bg-background px-4 pb-4 md:hidden",
        open ? "block" : "hidden"
      )}>
        <nav className="flex flex-col gap-3 pt-3">
          <Link href="#features" className="text-sm text-muted-foreground" onClick={() => setOpen(false)}>Features</Link>
          <Link href="#how-it-works" className="text-sm text-muted-foreground" onClick={() => setOpen(false)}>How it works</Link>
          <Link href="#pricing" className="text-sm text-muted-foreground" onClick={() => setOpen(false)}>Pricing</Link>
        
          <div className="flex gap-2 pt-2">
            <Button variant="outline" size="sm" className="flex-1" asChild>
              <Link href="/login">Log in</Link>
            </Button>
            <Button size="sm" className="flex-1 bg-[oklch(0.65_0.18_40)] text-white hover:bg-[oklch(0.60_0.18_40)]" asChild>
              <Link href="/register">Get started</Link>
            </Button>
         
          </div>
        </nav>
      </div>
    </header>
  )
}
