import { Header } from "@/components/home/Header"
import { Footer } from "@/components/home/Footer"
import Pricing from "@/components/shadcn-space/blocks/pricing-01/pricing"

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-[80px]">
        <Pricing />
      </main>
      <Footer />
    </>
  )
}
