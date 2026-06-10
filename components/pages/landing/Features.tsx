import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Clock, Lock, Layers, Search, Smartphone } from "lucide-react"

const features = [
  {
    icon: BookOpen,
    title: "Text-first learning",
    description:
      "Every concept explained in clear, structured text. Read at your own speed — no video buffering, no forced pacing.",
  },
  {
    icon: Layers,
    title: "All subjects, one place",
    description:
      "Programming, Computer Science, Artificial Intelligence, Mathematics and more — all organized by subject and chapter.",
  },
  {
    icon: Clock,
    title: "Learn anytime",
    description:
      "Pick up exactly where you left off. Your progress is saved automatically across all devices.",
  },
  {
    icon: Lock,
    title: "Structured chapters",
    description:
      "Each course is broken into focused chapters. Short enough to finish in one sitting, deep enough to actually learn.",
  },
  {
    icon: Search,
    title: "Easy to navigate",
    description:
      "Jump to any chapter directly. No locked sequences — learn in the order that makes sense for you.",
  },
  {
    icon: Smartphone,
    title: "Works on any device",
    description:
      "Optimized for reading on mobile, tablet, or desktop. Clean layout, no clutter.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-medium text-[oklch(0.65_0.18_40)]">Why Slantbit</p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Learning that actually sticks
          </h2>
          <p className="mt-3 text-muted-foreground">
            Built for students who want to understand — not just watch.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <Card key={f.title} className="border-border bg-card">
              <CardContent className="p-6">
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-[oklch(0.65_0.18_40)]/10">
                  <f.icon className="h-4.5 w-4.5 text-[oklch(0.65_0.18_40)]" />
                </div>
                <h3 className="mb-1.5 text-sm font-medium text-foreground">{f.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{f.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
