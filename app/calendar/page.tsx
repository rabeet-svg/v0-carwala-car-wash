import { Header } from "@/components/home/Header"
import { Footer } from "@/components/home/Footer"
import BookingWidget from "@/components/booking-calendar/booking-widget";
import type { ServiceOption } from "@/components/booking-calendar/booking-widget";

// Service packages matching the main site offerings.
// Each maps to its own Cal.com Event Type for availability & booking.
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
];

export default async function CalendarPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const resolvedSearchParams = await searchParams;
  const initialServiceId = typeof resolvedSearchParams.service === 'string' ? resolvedSearchParams.service : undefined;

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex-1">
            <h1 className="text-2xl font-bold sm:text-3xl">Book Your Car Detailing Appointment</h1>
            <p className="mt-1 text-sm text-muted-foreground sm:text-base">
              Select your preferred package and time slot — we&apos;ll take care of the rest
            </p>
          </div>
        </div>

        <BookingWidget
          key={initialServiceId}
          services={SERVICES}
          initialServiceId={initialServiceId}
          title="Book Your Car Detailing Appointment"
          description="Choose your package and pick a convenient time for your vehicle"
          showHeader
        />
      </div>
      <Footer />
    </main>
  );
}
