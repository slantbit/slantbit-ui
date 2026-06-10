"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, BookOpen } from "lucide-react"

const subjects = [
  "Computer Science",
  "Artificial Intelligence",
  "Programming",
  "Mathematics",
  ]

export function Hero() {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIndex((i) => (i + 1) % subjects.length)
        setVisible(true)
      }, 300)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Subtle background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--color-foreground) 1px, transparent 1px),
            linear-gradient(90deg, var(--color-foreground) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Badge
            variant="secondary"
            className="mb-6 gap-1.5 px-3 py-1 text-xs"
          >
            <BookOpen className="h-3 w-3" />
            Text-based learning — no long videos, no fluff
          </Badge>

          <h1 className="mb-4 text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-6xl">
            Learn{" "}
            <span
              className="text-[oklch(0.65_0.18_40)] transition-opacity duration-300"
              style={{ opacity: visible ? 1 : 0 }}
            >
              {subjects[index]}
            </span>
            <br />
            at your own pace
          </h1>

          <p className="mb-8 text-base leading-relaxed text-muted-foreground md:text-lg">
            Slantbit delivers structured, text-based courses across all subjects.
            No distractions. No autoplay. Just clear explanations you can read,
            re-read, and actually understand.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              className="w-full bg-[oklch(0.65_0.18_40)] text-white hover:bg-[oklch(0.60_0.18_40)] sm:w-auto"
              asChild
            >
              <Link href="/register">
                Start learning free
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
              <Link href="#how-it-works">See how it works</Link>
            </Button>
          </div>

          <p className="mt-4 text-xs text-muted-foreground">
            Free chapters available · No credit card required
          </p>
        </div>

        {/* Preview card */}
        <div className="mx-auto mt-16 max-w-2xl">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <div className="mb-4 flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
              <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
              <span className="ml-2 text-xs text-muted-foreground">Chapter 3 — Linear Equations</span>
            </div>
            <div className="space-y-3">
              <div className="h-4 w-3/4 rounded bg-muted" />
              <div className="h-3 w-full rounded bg-muted/70" />
              <div className="h-3 w-5/6 rounded bg-muted/70" />
              <div className="h-3 w-full rounded bg-muted/70" />
              <div className="h-3 w-2/3 rounded bg-muted/70" />
              <div className="mt-4 h-3 w-full rounded bg-muted/70" />
              <div className="h-3 w-4/5 rounded bg-muted/70" />
              <div className="h-3 w-full rounded bg-muted/70" />
            </div>
            <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
              <span className="text-xs text-muted-foreground">Chapter 3 of 12</span>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">Previous</Button>
                <Button size="sm" className="bg-[oklch(0.65_0.18_40)] text-white hover:bg-[oklch(0.60_0.18_40)]">Next chapter</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
