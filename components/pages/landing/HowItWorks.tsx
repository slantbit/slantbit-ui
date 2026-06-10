import { UserPlus, BookMarked, CreditCard, GraduationCap } from "lucide-react"

const steps = [
  {
    icon: UserPlus,
    title: "Create a free account",
    description: "Sign up with your email. No credit card needed to get started.",
  },
  {
    icon: BookMarked,
    title: "Browse subjects",
    description: "Explore courses across all subjects. Free chapters are open to everyone.",
  },
  {
    icon: CreditCard,
    title: "Subscribe for full access",
    description: "Unlock all chapters with a monthly, half-yearly, or yearly plan.",
  },
  {
    icon: GraduationCap,
    title: "Learn at your pace",
    description: "Read, re-read, and master every topic. No deadlines, no pressure.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-border py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-medium text-[oklch(0.65_0.18_40)]">How it works</p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Up and running in minutes
          </h2>
        </div>

        <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Connector line — desktop only */}
          <div className="absolute left-0 right-0 top-5 hidden h-px bg-border lg:block" style={{ left: "12.5%", right: "12.5%" }} />

          {steps.map((step, i) => (
            <div key={step.title} className="relative flex flex-col items-center text-center">
              <div className="relative mb-4 flex h-10 w-10 items-center justify-center rounded-full border-2 border-[oklch(0.65_0.18_40)] bg-background">
                <step.icon className="h-4 w-4 text-[oklch(0.65_0.18_40)]" />
                <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[oklch(0.65_0.18_40)] text-[9px] font-semibold text-white">
                  {i + 1}
                </span>
              </div>
              <h3 className="mb-1.5 text-sm font-medium text-foreground">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
