import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CtaBanner() {
  return (
    <section className="border-t border-border py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Ready to start learning?
          </h2>
          <p className="mb-8 text-muted-foreground">
            Join thousands of students learning at their own pace on Slantbit.
            Free chapters available — no card required.
          </p>
          <Button
            size="lg"
            className="bg-[oklch(0.65_0.18_40)] text-white hover:bg-[oklch(0.60_0.18_40)]"
            asChild
          >
            <Link href="/register">
              Create free account
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
