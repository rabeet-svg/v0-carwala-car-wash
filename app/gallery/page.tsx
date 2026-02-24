import { Header } from "@/components/home/Header"
import { Footer } from "@/components/home/Footer"
import { generatePageMetadata } from "@/lib/metadata"
import type { Metadata } from "next"

export const metadata: Metadata = generatePageMetadata({
  title: "Gallery",
  description: "Explore our portfolio of professional car detailing work in Karachi.",
  image: "/premium-car-detailing-polishing-and-protection.jpg",
  url: "/gallery",
})

const galleryImages = [
  { src: "/media/501-homepage-007.webp", alt: "Premium Interior & Exterior Detailing" },
  { src: "/media/501-homepage-008.webp", alt: "Paint Protection Film (PPF)" },
  { src: "/media/501-homepage-009.webp", alt: "Paint Correction & Polishing" },
  { src: "/media/501-homepage-010.webp", alt: "Ceramic Coating" },
  { src: "/media/501-homepage-011.webp", alt: "Window Tinting" },
  { src: "/media/501-homepage-003.mp4", alt: "Car detailing process", isVideo: true },
  { src: "/media/501-homepage-020.mp4", alt: "Car transformation video", isVideo: true },
  { src: "/media/501-homepage-021.mp4", alt: "Car detailing showcase", isVideo: true },
]

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-[80px]">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-medium text-foreground mb-4">
              Our Gallery
            </h1>
            <p className="text-lg font-body text-muted-foreground max-w-2xl mx-auto">
              Explore our portfolio of professional car detailing transformations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((item, i) => (
              <div
                key={i}
                className="group relative aspect-square overflow-hidden rounded-lg bg-muted"
              >
                {item.isVideo ? (
                  <video
                    src={item.src}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
