import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"
import Link from "next/link"
import { PlansList } from "@/constant/pricing-plans"

const included = [
  "Access to all subjects and courses",
  "All chapters — current and future",
  "Read on any device",
  "Progress saved automatically",
]

export function PricingPreview() {
  return (
    <section id="pricing" className="border-t border-border bg-muted/30 py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-medium text-[oklch(0.65_0.18_40)]">Pricing</p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Simple, honest pricing
          </h2>
          <p className="mt-3 text-muted-foreground">
            All plans include full access. No hidden fees.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {PlansList.map((plan) => (
            <Card
              key={plan.name}
              className={
                plan.popular
                  ? "relative border-[oklch(0.65_0.18_40)] bg-card shadow-md"
                  : "border-border bg-card"
              }
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-[oklch(0.65_0.18_40)] text-white hover:bg-[oklch(0.65_0.18_40)]">
                    Most popular
                  </Badge>
                </div>
              )}
              <CardHeader className="pb-2 pt-6">
                <p className="text-sm font-medium text-muted-foreground">{plan.name}</p>
                <div className="flex items-end gap-1">
                  <span className="text-3xl font-semibold text-foreground">{plan.price}</span>
                  <span className="mb-0.5 text-xs text-muted-foreground">{plan.per}</span>
                </div>
                <p className="text-xs text-muted-foreground">{plan.description}</p>
              </CardHeader>
              <CardContent className="pb-6">
                <Button
                  className={
                    plan.popular
                      ? "mb-4 w-full bg-[oklch(0.65_0.18_40)] text-white hover:bg-[oklch(0.60_0.18_40)]"
                      : "mb-4 w-full"
                  }
                  variant={plan.popular ? "default" : "outline"}
                  asChild
                >
                  <Link href="/register">{plan.cta}</Link>
                </Button>
                <ul className="space-y-2">
                  {included.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <Check className="mt-0.5 h-3 w-3 shrink-0 text-[oklch(0.65_0.18_40)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          Free chapters available without a subscription · Cancel anytime
        </p>
      </div>
    </section>
  )
}
