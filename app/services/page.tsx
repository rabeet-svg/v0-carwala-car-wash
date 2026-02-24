import { Header } from "@/components/home/Header"
import { Footer } from "@/components/home/Footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    id: "silver",
    title: "Silver Detailing Package",
    image: "/media/silver.webp",
  },
  {
    id: "gold",
    title: "Gold Detailing Package",
    image: "/media/gold.webp",
  },
  {
    id: "platinum",
    title: "Platinum Detailing Package",
    image: "/media/platinum.webp",
  },
  {
    id: "detailed",
    title: "Deep Detailing Package",
    image: "/media/detailed.webp",
  },
]

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-[80px]">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-12 text-center">
            <h1 className="text-2xl font-bold sm:text-3xl font-heading mb-4">
              Our Services
            </h1>
            <p className="text-sm text-muted-foreground sm:text-base font-body">
              Professional car detailing packages for every need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className="group flex flex-col"
              >
                {/* Image with overlay on desktop */}
                <div className="relative aspect-square md:overflow-hidden rounded-lg bg-muted">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 md:group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="w-full">
                      <h3 className="text-white font-heading font-medium text-lg mb-4">
                        {service.title}
                      </h3>
                      <Link href={`/calendar?service=${service.id}`}>
                        <Button className="w-full bg-white text-black hover:bg-white/90 rounded-none px-6 py-5 text-xs tracking-widest uppercase font-medium">
                          Book This Service
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Title and button below on mobile */}
                <div className="md:hidden mt-4 space-y-3">
                  <h3 className="text-foreground font-heading font-medium text-lg">
                    {service.title}
                  </h3>
                  <Link href={`/calendar?service=${service.id}`}>
                    <Button className="w-full bg-foreground text-background hover:bg-foreground/90 rounded-none px-6 py-5 text-xs tracking-widest uppercase font-medium">
                      Book This Service
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
