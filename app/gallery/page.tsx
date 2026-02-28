import { Header } from "@/components/home/Header"
import { Footer } from "@/components/home/Footer"
import { generatePageMetadata } from "@/lib/metadata"
import { Compare } from "@/components/ui/compare"
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

// Before/After comparison images (update with your actual before/after pairs)
const comparisonImages = [
  {
    before: "/media/501-homepage-007.webp",
    after: "/media/501-homepage-008.webp",
    title: "Paint Correction Transformation",
  },
  {
    before: "/media/501-homepage-009.webp",
    after: "/media/501-homepage-010.webp",
    title: "Ceramic Coating Before & After",
  },
]

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-[80px]">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-12 text-center">
            <h1 className="text-2xl font-bold sm:text-3xl font-heading mb-4">
              Our Gallery
            </h1>
            <p className="text-sm text-muted-foreground sm:text-base font-body">
              Explore our portfolio of professional car detailing transformations
            </p>
          </div>

          {/* Before/After Comparisons Section */}
          <section className="mb-16">
            <h2 className="text-xl font-bold font-heading mb-6 text-center">
              Before & After Comparisons
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {comparisonImages.map((comparison, i) => (
                <div key={i} className="flex flex-col items-center">
                  <Compare
                    firstImage={comparison.after}
                    secondImage={comparison.before}
                    firstImageClassName="object-cover w-full h-full"
                    secondImageClassName="object-cover w-full h-full"
                    className="w-full aspect-square rounded-lg border border-border"
                    slideMode="drag"
                    autoplay={true}
                    autoplayDuration={4000}
                  />
                  <p className="mt-3 text-sm text-muted-foreground font-body">
                    {comparison.title}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Gallery Grid Section */}
          <section>
            <h2 className="text-xl font-bold font-heading mb-6 text-center">
              Photo Gallery
            </h2>
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
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
