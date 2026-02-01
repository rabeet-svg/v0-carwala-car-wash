"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Droplet, Sparkles, Shield, Phone, MapPin, Clock, MessageCircle, X } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { trpc } from "@/lib/trpc"
import { toast } from "sonner"

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "car-wash",
    message: "",
  })

  const [showWhatsApp, setShowWhatsApp] = useState(true)

  const submitMutation = trpc.contact.submit.useMutation({
    onSuccess: () => {
      toast.success("Thank you for your enquiry! We'll contact you soon.")
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "car-wash",
        message: "",
      })
    },
    onError: (error) => {
      toast.error(error.message || "Something went wrong. Please try again.")
    },
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    submitMutation.mutate(formData)
  }

  const handleWhatsAppClick = () => {
    const phoneNumber = "919876543210" // Replace with your WhatsApp number
    const message = "Hi Carwala, I need help with your services!"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {/* Chat popup message */}
        {showWhatsApp && (
          <div className="bg-primary text-primary-foreground rounded-lg p-4 max-w-xs shadow-xl animate-bounce">
            <div className="flex justify-between items-start gap-3 mb-3">
              <div>
                <p className="font-semibold text-sm">How can we help?</p>
                <p className="text-xs opacity-90 mt-1">Chat with us on WhatsApp for quick support!</p>
              </div>
              <button
                onClick={() => setShowWhatsApp(false)}
                className="p-1 hover:bg-primary/80 rounded transition-colors flex-shrink-0"
                aria-label="Close chat popup"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* WhatsApp button */}
        <button
          onClick={handleWhatsAppClick}
          className="bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tight">Carwala</div>
          <div className="hidden md:flex gap-8">
            <a href="#services" className="hover:text-accent transition-colors">
              Services
            </a>
            <a href="#why-us" className="hover:text-accent transition-colors">
              Why Us
            </a>
            <a href="#contact" className="hover:text-accent transition-colors">
              Contact
            </a>
            <a href="#enquiry" className="hover:text-accent transition-colors">
              Enquiry
            </a>
          </div>
          <Button variant="secondary" size="sm" className="bg-accent text-accent-foreground hover:opacity-90">
            Book Now
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl bg-accent"></div>
          <div className="absolute bottom-0 right-10 w-96 h-96 rounded-full blur-3xl bg-accent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Your Car Deserves Premium Care</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 text-balance">
              Professional car wash and detailing services that transform your vehicle
            </p>
            <Button size="lg" className="bg-accent text-accent-foreground hover:opacity-90 text-lg">
              Schedule Your Service
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Car Wash Service */}
            <Card className="overflow-hidden border-2 border-border hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 w-full bg-muted">
                <Image
                  src="/professional-car-wash-with-water-spray-and-soap.jpg"
                  alt="Professional car wash service"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-accent/15 rounded-lg">
                    <Droplet className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold">Car Wash</h3>
                </div>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  Experience the ultimate in vehicle cleanliness with our professional car wash service. We use premium
                  water-based solutions and eco-friendly products to protect your paint while delivering a showroom
                  shine.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>Hand wash and dry</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>Wheel and tire cleaning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>Window and mirror polish</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>Interior vacuum and wipe down</span>
                  </li>
                </ul>
                <Button className="w-full bg-accent hover:opacity-90 text-accent-foreground">Learn More</Button>
              </div>
            </Card>

            {/* Detailing Service */}
            <Card className="overflow-hidden border-2 border-border hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 w-full bg-muted">
                <Image
                  src="/premium-car-detailing-polishing-and-protection.jpg"
                  alt="Premium detailing service"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-primary/20 rounded-lg">
                    <Sparkles className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Premium Detailing</h3>
                </div>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  Transform your vehicle with our comprehensive detailing service. Our experts meticulously restore and
                  protect every surface, inside and out, using professional-grade products.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>Exterior paint protection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>Interior deep cleaning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>Leather conditioning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>Ceramic coating application</span>
                  </li>
                </ul>
                <Button className="w-full bg-primary hover:opacity-90 text-primary-foreground">Learn More</Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Carwala?</h2>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border border-border text-center">
              <div className="flex justify-center mb-4">
                <Shield className="w-12 h-12 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Quality Guaranteed</h3>
              <p className="text-foreground/70 leading-relaxed">
                We use only premium products and proven techniques to ensure your vehicle receives the best possible
                care every time.
              </p>
            </Card>

            <Card className="p-8 border border-border text-center">
              <div className="flex justify-center mb-4">
                <Clock className="w-12 h-12 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Quick & Convenient</h3>
              <p className="text-foreground/70 leading-relaxed">
                Our efficient process means minimal wait times. Book online and we'll have your car ready when you need
                it.
              </p>
            </Card>

            <Card className="p-8 border border-border text-center">
              <div className="flex justify-center mb-4">
                <Sparkles className="w-12 h-12 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Professional Team</h3>
              <p className="text-foreground/70 leading-relaxed">
                Our trained experts are passionate about cars and dedicated to delivering exceptional results every
                single time.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <section id="enquiry" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Send Us an Enquiry</h2>
            <p className="text-lg text-foreground/70">
              Have questions? Get in touch with us and we'll respond shortly.
            </p>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full mt-4"></div>
          </div>

          <Card className="p-8 md:p-12 border-2 border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-border bg-background focus:outline-none focus:border-accent transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-border bg-background focus:outline-none focus:border-accent transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-border bg-background focus:outline-none focus:border-accent transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>

                {/* Service Selection */}
                <div>
                  <label htmlFor="service" className="block text-sm font-semibold mb-2">
                    Service Interested In *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-border bg-background focus:outline-none focus:border-accent transition-colors"
                  >
                    <option value="car-wash">Car Wash</option>
                    <option value="detailing">Premium Detailing</option>
                    <option value="both">Both Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border-2 border-border bg-background focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Tell us more about your enquiry..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex gap-4">
                <Button
                  type="submit"
                  size="lg"
                  className="bg-accent text-accent-foreground hover:opacity-90"
                  disabled={submitMutation.isPending}
                >
                  {submitMutation.isPending ? "Sending..." : "Send Enquiry"}
                </Button>
                <Button
                  type="reset"
                  size="lg"
                  variant="outline"
                  onClick={() =>
                    setFormData({
                      name: "",
                      email: "",
                      phone: "",
                      service: "car-wash",
                      message: "",
                    })
                  }
                >
                  Clear Form
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-8 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-accent" />
                <h3 className="font-bold text-lg">Location</h3>
              </div>
              <p className="text-foreground/70">
                123 Main Street
                <br />
                Downtown Central
                <br />
                City, State 12345
              </p>
            </Card>

            <Card className="p-8 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <Phone className="w-6 h-6 text-accent" />
                <h3 className="font-bold text-lg">Phone</h3>
              </div>
              <p className="text-foreground/70">
                (555) 123-4567
                <br />
                Mon - Sun: 8AM - 6PM
              </p>
            </Card>

            <Card className="p-8 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-accent" />
                <h3 className="font-bold text-lg">Hours</h3>
              </div>
              <p className="text-foreground/70">
                Weekdays: 8AM - 7PM
                <br />
                Weekends: 9AM - 6PM
              </p>
            </Card>
          </div>

          <Card className="p-8 bg-primary text-primary-foreground">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-bold mb-4">Ready to transform your vehicle?</h3>
              <p className="mb-6 opacity-90">
                Contact us today to book your car wash or detailing appointment. Our team is ready to give your vehicle
                the care it deserves.
              </p>
              <Button size="lg" className="bg-accent text-accent-foreground hover:opacity-90">
                Schedule Now
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-lg font-bold">Carwala</div>
            <p className="text-center md:text-right text-primary-foreground/70">
              &copy; 2026 Carwala Car Wash & Detailing. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
