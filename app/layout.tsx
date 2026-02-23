import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { TRPCProvider } from "@/components/providers"
import { Toaster } from "sonner"
import { WhatsAppWidget } from "@/components/WhatsAppWidget"
import { defaultMetadata } from "@/lib/metadata"
import "./globals.css"

export const metadata: Metadata = defaultMetadata

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-body antialiased">
        <TRPCProvider>
          {children}
          <WhatsAppWidget />
          <Analytics />
          <Toaster />
        </TRPCProvider>
      </body>
    </html>
  )
}
