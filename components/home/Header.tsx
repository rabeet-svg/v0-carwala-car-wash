"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ContactForm } from "@/components/contact/ContactForm"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      {/* Main Navigation Bar */}
      <div className="h-[70px] md:h-[80px] flex items-center justify-between px-[20px] md:px-[30px]">
        {/* Desktop Navigation - Left */}
        <nav className="hidden md:flex items-center gap-[25px]">
          <Link href="/services" className="text-foreground text-[14px] font-sans font-normal tracking-[1.4px] uppercase hover:text-primary transition-colors">
            SERVICES
          </Link>
          <Link href="#" className="text-foreground text-[14px] font-sans font-normal tracking-[1.4px] uppercase hover:text-primary transition-colors">
            GALLERY
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center">
          <Sheet>
            <SheetTrigger asChild>
              <button className="text-foreground text-[14px] font-sans font-normal tracking-[1.4px] uppercase hover:text-primary transition-colors flex items-center gap-2">
                <Menu className="w-[20px] h-[20px]" />
                MENU
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background">
              <SheetHeader>
                <SheetTitle className="text-left font-heading text-xl">Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-6 mt-8 p-6">
                <nav className="flex flex-col gap-6">
                  <Link href="/" className="text-foreground text-lg font-sans font-medium tracking-[1.4px] uppercase hover:text-primary transition-colors">
                    HOME
                  </Link>
                  <Link href="/services" className="text-foreground text-lg font-sans font-medium tracking-[1.4px] uppercase hover:text-primary transition-colors">
                    SERVICES
                  </Link>
                  <Link href="#" className="text-foreground text-lg font-sans font-medium tracking-[1.4px] uppercase hover:text-primary transition-colors">
                    GALLERY
                  </Link>
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="text-foreground text-left text-lg font-sans font-medium tracking-[1.4px] uppercase hover:text-primary transition-colors">
                        CONTACT
                      </button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-3xl max-h-[85vh] overflow-y-auto p-4 sm:p-6">
                      <DialogHeader>
                        <DialogTitle className="font-heading text-3xl">Send Us an Enquiry</DialogTitle>
                        <DialogDescription>
                          Have questions? Get in touch with us and we'll respond shortly.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="mt-4">
                        <ContactForm />
                      </div>
                    </DialogContent>
                  </Dialog>
                  <Link href="/calendar">
                    <Button className="w-full bg-white hover:bg-white/90 text-foreground text-[11.3px] font-sans tracking-[1.3px] font-normal uppercase px-[10px] h-[36px] rounded-sm">
                      BOOK NOW
                    </Button>
                  </Link>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Logo - Center */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2">
          <h1 className="text-[28px] md:text-[36px] font-pixel font-bold text-foreground tracking-wider">
            CAR WALA
          </h1>
        </Link>

        {/* Desktop Actions - Right */}
        <div className="hidden md:flex items-center gap-[15px]">
          <Link href="/calendar">
            <Button className="bg-white hover:bg-white/90 text-foreground text-[12px] font-sans tracking-[1.4px] font-normal uppercase px-[20px] h-[40px] rounded-sm border border-border">
              BOOK NOW
            </Button>
          </Link>

          <Dialog>
            <DialogTrigger asChild>
              <Button className="text-[12px] font-sans tracking-[1.4px] font-normal uppercase px-[20px] h-[40px] rounded-sm border border-border">
                LET'S TALK
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-3xl max-h-[85vh] overflow-y-auto p-4 sm:p-6">
              <DialogHeader>
                <DialogTitle className="font-heading text-3xl">Send Us an Enquiry</DialogTitle>
                <DialogDescription>
                  Have questions? Get in touch with us and we'll respond shortly.
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4">
                <ContactForm />
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Mobile Actions */}
        <div className="flex md:hidden items-center gap-[10px]">
          <Link href="/calendar">
            <Button className="bg-white hover:bg-white/90 text-foreground text-[11px] font-sans tracking-[1.3px] font-normal uppercase px-[12px] h-[36px] rounded-sm border border-border">
              BOOK
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
