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
    <div className="fixed top-[25px] left-0 right-0 z-50 flex justify-center px-[10px] md:px-[25px] pointer-events-none">
      <div className="bg-destructive/80 backdrop-blur-md shadow-header w-full max-w-[1345px] h-[65px] flex items-center justify-between px-[15px] md:px-[25px] pointer-events-auto">
        <div className="flex items-center h-full -ml-[15px] md:-ml-[25px]">
          <Link href="/" className="relative w-[150px] xs:w-[180px] h-[42px] md:w-[240px] md:h-[55px]">
            <img alt="Car Wala" className="absolute left-0 top-0 w-full h-full object-contain" src="/Car Wala.png" />
          </Link>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-[8px] md:hidden">
          <Link href="/calendar">
            <Button className="bg-white hover:bg-white/90 text-foreground text-[11.3px] font-sans tracking-[1.3px] font-normal uppercase px-[10px] h-[36px] rounded-sm">
              BOOK NOW
            </Button>
          </Link>

          <Sheet>
            <SheetTrigger asChild>
              <button className="text-foreground p-1">
                <Menu className="w-[24px] h-[24px]" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-destructive/80 backdrop-blur-md">
              <SheetHeader>
                <SheetTitle className="text-left font-heading text-xl">Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-6 mt-8 p-6">
                <nav className="flex flex-col gap-6">
                  <Link href="/" className="text-foreground text-lg font-sans font-medium tracking-[1.4px] uppercase hover:text-primary transition-colors">
                    HOME
                  </Link>
                  <Link href="#" className="text-foreground text-lg font-sans font-medium tracking-[1.4px] uppercase hover:text-primary transition-colors">
                    ABOUT
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
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full text-[11.3px] font-sans tracking-[1.3px] font-normal uppercase px-[10px] h-[36px] rounded-sm">
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
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Navigation */}
        <div className="flex items-center h-full gap-[30px] hidden md:flex">
          <nav className="flex items-center h-full gap-[20px]">
            <Link href="/" className="text-primary text-[14px] font-sans font-normal tracking-[1.4px] uppercase hover:opacity-80">
              HOME
            </Link>
            <Link href="#" className="text-foreground text-[13px] font-sans font-normal tracking-[1.4px] uppercase hover:text-primary transition-colors">
              ABOUT
            </Link>
            <Link href="/services" className="text-foreground text-[13px] font-sans font-normal tracking-[1.4px] uppercase hover:text-primary transition-colors">
              SERVICES
            </Link>
            <Link href="#" className="text-foreground text-[13px] font-sans font-normal tracking-[1.4px] uppercase hover:text-primary transition-colors">
              GALLERY
            </Link>

            <Dialog>
              <DialogTrigger asChild>
                <button className="text-foreground text-[13px] font-sans font-normal tracking-[1.4px] uppercase hover:text-primary transition-colors cursor-pointer">
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
          </nav>

          <div className="flex items-center h-full gap-[10px] pl-[15px]">
            <Link href="/calendar">
              <Button className="bg-white hover:bg-white/90 text-foreground text-[12px] font-sans tracking-[1.4px] font-normal uppercase px-[24px] py-[12px] h-auto rounded-sm">
                BOOK NOW
              </Button>
            </Link>

            <Dialog>
                          <DialogTrigger asChild>
                            <Button className="text-[12px] font-sans tracking-[1.4px] font-normal uppercase px-[24px] py-[12px] h-auto rounded-sm">
                              LET'S TALK
                            </Button>
                          </DialogTrigger>               <DialogContent className="sm:max-w-3xl max-h-[85vh] overflow-y-auto p-4 sm:p-6">
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
        </div>
      </div>
    </div>
  )
}
