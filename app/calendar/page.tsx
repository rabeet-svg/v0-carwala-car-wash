import { Header } from "@/components/home/Header"
import { Footer } from "@/components/home/Footer"
// import BookingWidget from "@/components/booking-calendar/booking-widget";
// import type { ServiceOption } from "@/components/booking-calendar/booking-widget";
import { generatePageMetadata } from "@/lib/metadata"
import type { Metadata } from "next"
// import { ElevenLabsWidget } from "@/components/ElevenLabsWidget"

/*
const SERVICES: ServiceOption[] = [
  {
    id: "silver",
    name: "Silver Package",
    eventTypeId: process.env.NEXT_PUBLIC_CALCOM_EVENT_TYPE_ID || "",
    duration: 30,
    description: "Essential care — exterior wash, interior vacuum & dashboard wipe",
  },
  {
    id: "gold",
    name: "Gold Package",
    eventTypeId: process.env.NEXT_PUBLIC_CALCOM_GOLD_EVENT_TYPE_ID || "",
    duration: 60,
    description: "Premium treatment — deep clean, seat shampooing & engine bay",
  },
  {
    id: "platinum",
    name: "Platinum Package",
    eventTypeId: process.env.NEXT_PUBLIC_CALCOM_PLATINUM_EVENT_TYPE_ID || "",
    duration: 90,
    description: "Ultimate luxury — polish, paint sealant & leather conditioning",
  },
  {
    id: "detailed",
    name: "Detailed Package",
    eventTypeId: process.env.NEXT_PUBLIC_CALCOM_DETAILED_EVENT_TYPE_ID || "",
    duration: 120,
    description: "Complete perfection — paint correction, ceramic coating & full detail",
  },
  {
    id: "diamond",
    name: "Diamond Package",
    eventTypeId: process.env.NEXT_PUBLIC_CALCOM_DIAMOND_EVENT_TYPE_ID || "",
    duration: 720,
    description: "The ultimate transformation — full paint correction, multi-layer ceramic coating, interior restoration, engine bay detailing & lifetime protection",
  },
];
*/

export const metadata: Metadata = generatePageMetadata({
  title: "Book Appointment",
  description: "Schedule your professional car detailing appointment online. Choose from Silver, Gold, Platinum, or Detailed packages.",
  image: "/premium-car-detailing-polishing-and-protection.jpg",
  url: "/calendar",
})

export default async function CalendarPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  // const resolvedSearchParams = await searchParams;
  // const initialServiceId = typeof resolvedSearchParams.service === 'string' ? resolvedSearchParams.service : undefined;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-[80px]">
        {/* Calendar page temporarily disabled */}
        <div className="container mx-auto px-4 py-12 text-center">
          <p className="text-muted-foreground">Booking is currently unavailable.</p>
        </div>
      </main>
      <Footer />
      {/* <ElevenLabsWidget agentId="agent_0401km3y12mjf95a5h3yspgy3njr" /> */}
    </>
  );
}
