"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
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
  SheetClose,
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
              <button className="text-foreground text-[14px] font-sans font-normal tracking-[1.4px] uppercase hover:opacity-60 transition-opacity">
                MENU
              </button>
            </SheetTrigger>
            <SheetContent 
              side="top" 
              className="w-full h-full max-h-full bg-background border-b border-border p-0 shadow-none"
              showCloseButton={false}
            >
              {/* Full height navigation container */}
              <div className="h-full flex flex-col">
                {/* Header with CLOSE button */}
                <div className="h-[70px] flex items-center justify-end px-[32px] border-b border-border">
                  <SheetClose asChild>
                    <button className="text-foreground text-[14px] font-sans font-normal tracking-[1.4px] uppercase hover:opacity-60 transition-opacity">
                      CLOSE
                    </button>
                  </SheetClose>
                </div>
                
                {/* Navigation links */}
                <div className="flex-1 overflow-y-auto">
                  <nav className="flex flex-col divide-y divide-border">
                    <Link href="/" className="flex h-[56px] items-center px-[32px] text-foreground text-[16px] font-sans font-normal tracking-[1.4px] uppercase hover:text-primary transition-colors">
                      HOME
                    </Link>
                    <Link href="/services" className="flex h-[56px] items-center px-[32px] text-foreground text-[16px] font-sans font-normal tracking-[1.4px] uppercase hover:text-primary transition-colors">
                      SERVICES
                    </Link>
                    <Link href="#" className="flex h-[56px] items-center px-[32px] text-foreground text-[16px] font-sans font-normal tracking-[1.4px] uppercase hover:text-primary transition-colors">
                      GALLERY
                    </Link>
                    <Dialog>
                      <DialogTrigger asChild>
                        <button className="flex h-[56px] items-center px-[32px] text-foreground text-left text-[16px] font-sans font-normal tracking-[1.4px] uppercase hover:text-primary transition-colors w-full">
                          CONTACT
                        </button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-3xl max-h-[85vh] overflow-y-auto p-4 sm:p-6">
                        <DialogHeader>
                          <DialogTitle className="sr-only">Contact Form</DialogTitle>
                          <DialogDescription className="sr-only">
                            Have questions? Get in touch with us and we'll respond shortly.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="mt-4">
                          <ContactForm />
                        </div>
                      </DialogContent>
                    </Dialog>
                    <div className="h-[56px] flex items-center px-[32px]">
                      <Button className="w-full bg-white hover:bg-white/90 text-foreground text-[12px] font-sans tracking-[1.3px] font-normal uppercase px-[10px] h-[40px] rounded-sm">
                        BOOK NOW
                      </Button>
                    </div>
                  </nav>
                </div>
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
                <DialogTitle className="sr-only">Contact Form</DialogTitle>
                <DialogDescription className="sr-only">
                  Have questions? Get in touch with us and we'll respond shortly.
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4">
                <ContactForm />
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  )
}
