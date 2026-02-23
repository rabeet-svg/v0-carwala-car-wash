import { Header } from "@/components/home/Header"
import { Footer } from "@/components/home/Footer"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"

const services = [
  {
    id: "silver",
    title: "Silver Detailing Package",
    subtitle: "ESSENTIAL CARE FOR DAILY DRIVERS",
    description: "A comprehensive maintenance wash and interior cleanup designed to keep your vehicle looking fresh and well-maintained.",
    image: "/media/silver.webp",
    lists: [
      {
        title: "Exterior Care:",
        items: [
          "pH Neutral Foam Wash",
          "Safe Hand Wash (Microfiber)",
          "Tyre Cleaning & Dressing",
          "Engine Bay Basic Cleaning",
          "Streak-Free Glass Cleaning"
        ]
      },
      {
        title: "Interior Care:",
        items: [
          "Interior Cleaning (No Seat Removal)",
          "Floor & Seat Vacuum",
          "Dashboard & Console Cleaning",
          "Interior Plastics Polishing"
        ]
      }
    ]
  },
  {
    id: "gold",
    title: "Gold Detailing Package",
    subtitle: "ENHANCED PROTECTION & SHINE",
    description: "Steps up the game with double-stage wax protection and deeper cleaning for both the engine bay and interior.",
    image: "/media/gold.webp",
    lists: [
      {
        title: "Exterior Care:",
        items: [
          "All Silver Package Features",
          "Double-Stage Wax Protection",
          "Full Engine Bay Deep Cleaning",
          "Trunk/Boot Complete Cleaning"
        ]
      },
      {
        title: "Interior Care:",
        items: [
          "All Silver Package Features",
          "Improved Interior Detailing & Finishing"
        ]
      }
    ]
  },
  {
    id: "platinum",
    title: "Platinum Detailing Package",
    subtitle: "ADVANCED RESTORATION & FINISH",
    description: "The ultimate restoration package featuring full body polishing, compounding, and deep interior restoration with seat removal.",
    image: "/media/platinum.webp",
    lists: [
      {
        title: "Exterior Care:",
        items: [
          "All Gold Package Features",
          "Full Body Polishing & Compounding",
          "Advanced Paint Finishing"
        ]
      },
      {
        title: "Interior Care:",
        items: [
          "All Gold Package Features",
          "Seats Removal & Deep Cleaning",
          "Mats & Carpets Deep Wash",
          "Complete Interior Restoration"
        ]
      }
    ]
  },
  {
    id: "detailed",
    title: "Deep Detailing Package",
    subtitle: "FOR FRESHLY IMPORTED & SPECIAL VEHICLES",
    description: "Specially designed for fresh imports or vehicles needing a complete reset. We deep clean and detail absolutely everything.",
    image: "/media/detailed.webp",
    lists: [
      {
        title: "Package Highlights:",
        items: [
          "Includes Basic, Gold & Platinum Features",
          "Complete Deep Cleaning of Everything",
          "Complete Deep Detailing of Everything",
          "Expert Care for Imports"
        ]
      }
    ]
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
            <img 
              src="/media/680-services-006.webp" 
              alt="Services Background" 
              className="w-full h-full object-cover"
            />
        </div>
        
        <div className="container mx-auto relative z-20 text-center max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-heading font-medium tracking-tight mb-6 animate-hero-fade-up">
            SERVICES
          </h1>
          <p className="text-lg md:text-2xl text-black font-medium leading-relaxed animate-hero-fade-up delay-100 drop-shadow-sm">
            Whether you visit our studio or book a mobile service, we guarantee visible results and lasting protection.
          </p>
        </div>
      </section>

      {/* Intro Text */}
      <section className="py-16 md:py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-normal leading-relaxed text-foreground/90">
            At Carwala Auto Care, we offer a complete range of professional car care services designed to protect, restore, and elevate your vehicle’s appearance. From daily drivers to luxury machines, we apply the same precision, premium products, and attention to detail, every single time.
          </h2>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 md:py-32 px-4 space-y-24 md:space-y-40 container mx-auto">
        {services.map((service, index) => (
          <div 
            key={service.title} 
            className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center ${
              index % 2 === 1 ? 'md:grid-flow-dense' : ''
            }`}
          >
            {/* Text Content */}
            <div className={`space-y-8 ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
              <div className="space-y-4">
                <h5 className="text-sm md:text-base font-sans font-medium tracking-widest text-muted-foreground uppercase">
                  {service.subtitle}
                </h5>
                <h3 className="text-3xl md:text-5xl font-heading font-medium text-foreground">
                  {service.title}
                </h3>
                <div className="w-20 h-1 bg-destructive/80" />
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                {service.lists.map((list) => (
                  <div key={list.title} className="space-y-4">
                    <h4 className="font-heading font-medium text-xl border-b border-border pb-2">
                      {list.title}
                    </h4>
                    <ul className="space-y-3">
                      {list.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-muted-foreground">
                          <Check className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                          <span className="text-sm font-sans">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              
              <div className="pt-6">
                <Link href={`/calendar?service=${service.id}`}>
                  <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-none px-8 py-6 text-sm tracking-widest uppercase font-medium">
                    Book This Service
                  </Button>
                </Link>
              </div>
            </div>

            {/* Image Content */}
            <div className={`relative w-full overflow-hidden rounded-sm group ${index % 2 === 1 ? 'md:col-start-1' : ''}`}>
               <div className="absolute inset-0 bg-black/10 z-10 group-hover:bg-black/0 transition-colors duration-500" />
               <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-700 ease-premium"
              />
              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-destructive/30 z-0 hidden md:block" />
              <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-destructive/30 z-0 hidden md:block" />
            </div>
          </div>
        ))}
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-muted/20 border-y border-border/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-heading font-medium">Why Choose Carwala?</h2>
            <div className="w-24 h-1 bg-destructive mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Trusted by Karachi car owners", icon: "🏆" },
              { title: "Certified products & trained staff", icon: "🛡️" },
              { title: "Mobile or shop-based service", icon: "🚐" },
              { title: "Fast bookings via WhatsApp", icon: "💬" }
            ].map((item) => (
              <div key={item.title} className="p-8 bg-background border border-border/50 hover:border-destructive/30 transition-colors duration-300 flex flex-col items-center text-center gap-4 group rounded-sm shadow-sm hover:shadow-glow">
                <span className="text-4xl group-hover:scale-110 transition-transform duration-300 filter grayscale group-hover:grayscale-0">{item.icon}</span>
                <h3 className="font-heading font-medium text-lg text-foreground/90">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
