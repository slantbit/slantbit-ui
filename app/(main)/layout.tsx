// app/(main)/layout.tsx — sirf main pages pe Navbar/Footer
import { Navbar } from "@/components/pages/landing/Navbar"
import { Footer } from "@/components/pages/landing/Footer"
import HomePage from "@/components/pages/landing/page"


export default function MainLayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <>
            <Navbar />
            <HomePage/>
            {children}
            <Footer />
        </>
    )
}