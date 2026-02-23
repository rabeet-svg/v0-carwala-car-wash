import { Header } from "@/components/home/Header"
import { Hero } from "@/components/home/Hero"
import { WhyChooseUs } from "@/components/home/WhyChooseUs"
import { Stats } from "@/components/home/Stats"
import { Services } from "@/components/home/Services"
import { CallToAction } from "@/components/home/CallToAction"
import { Footer } from "@/components/home/Footer"

export const dynamic = 'force-static'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <WhyChooseUs />
      <Stats />
      <Services />
      <CallToAction />
      <Footer />
    </main>
  )
}
