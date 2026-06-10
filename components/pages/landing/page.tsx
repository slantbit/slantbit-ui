import { CtaBanner } from "./CtaBanner";
import { Features } from "./Features";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { HowItWorks } from "./HowItWorks";
import { Navbar } from "./Navbar";
import { PricingPreview } from "./PricingPreview";


export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* <Navbar /> */}
      <Hero />
      <Features />
      <HowItWorks />
      <PricingPreview />
      <CtaBanner />
      {/* <Footer /> */}
    </main>
  )
}
