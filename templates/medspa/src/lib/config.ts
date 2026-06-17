import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "VIO Med Spa Sugar Land",
    tagline: "Feel Beautiful, Live Confident",
    phone: "(281) 710-4499",
    phoneHref: "tel:+12817104499",
    email: "info@viomedspasugarland.com",
    address: "2210 Lone Star Dr Suite 200, Sugar Land, TX 77479",
    city: "Sugar Land",
    serviceAreas: ["Sugar Land", "Richmond", "Rosenberg", "Stafford", "Missouri City"],
    license: "Licensed Medical Spa",
    since: "2023",
    google_rating: "4.9",
    review_count: "200",
    emergency: false,
    theme: "ember",
    niche: "medspa",
  },

  services: [
    { icon: "sparkles", title: "Botox® & Fillers", desc: "Smooth wrinkles and restore volume with expert injections for a youthful look.", urgent: false },
    { icon: "heart", title: "Facials & Peels", desc: "Rejuvenate your skin with custom facials and chemical peels for a radiant complexion.", urgent: false },
    { icon: "shield-check", title: "Microneedling", desc: "Stimulate collagen production and improve skin texture with advanced microneedling treatments.", urgent: false },
    { icon: "star", title: "Body Contouring", desc: "Sculpt and tone your body with non-invasive treatments like EmSculpt NEO for a defined physique.", urgent: false },
    { icon: "droplets", title: "Wellness Injections", desc: "Boost your health and vitality with targeted lipotropic and vitamin injections.", urgent: false },
    { icon: "thermometer", title: "Hormone Therapy", desc: "Balance your hormones and improve overall well-being with personalized therapy plans.", urgent: false }
  ],

  testimonials: [
    { name: "Sarah L.", location: "Sugar Land, TX", stars: 5, text: "I had my first Hydrafacial at VIO Med Spa and it was absolutely amazing! My skin felt incredibly clean and looked so much brighter. The esthetician was very knowledgeable and made me feel comfortable throughout the entire process. I've already booked my next appointment!" },
    { name: "Mark T.", location: "Richmond, TX", stars: 5, text: "The team at VIO Med Spa Sugar Land is fantastic. I came in for Botox and was impressed by their professionalism and attention to detail. The results are natural and exactly what I wanted. Highly recommend for anyone looking for top-notch aesthetic services." },
    { name: "Jessica R.", location: "Missouri City, TX", stars: 5, text: "I've been coming to VIO Med Spa for a few months now for their weight management program, and I'm thrilled with my progress. The staff is supportive and the GLP-1 therapy has made a huge difference. It's a welcoming environment and I always feel well-cared for." }
  ],

  trustBadges: [
    "Board-Certified Practitioners", "Advanced Technology", "Personalized Treatment Plans", "5-Star Rated Experience", "Complimentary Consultations"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 500, label: "Happy Clients", suffix: "+", decimals: 0 },
    { value: 10, label: "Years Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "award", title: "Expert Practitioners", desc: "Our team consists of highly trained and certified professionals dedicated to your care." },
    { icon: "sparkles", title: "Cutting-Edge Treatments", desc: "We utilize the latest advancements in aesthetic and wellness technology for superior results." },
    { icon: "heart", title: "Personalized Care", desc: "Every treatment plan is tailored to your unique needs and aesthetic goals." },
    { icon: "shield-check", title: "Safety & Comfort", desc: "Your well-being is our top priority in a luxurious and secure environment." },
    { icon: "thumbs-up", title: "Exceptional Results", desc: "We are committed to delivering natural-looking and transformative outcomes." },
    { icon: "star", title: "Comprehensive Services", desc: "From injectables to wellness, we offer a full spectrum of aesthetic solutions." }
  ],

  formServiceOptions: ["Aesthetic Wellness Quiz", "Botox®", "Dysport®", "Jeuveau®", "Xeomin®", "Juvederm®", "Restylane", "RHA® Collection", "Skinvive™", "Platelet-Rich Plasma (PRP)", "Radiesse® (Collagen Induction)", "Sculptra®", "Kybella®", "PDO Threads", "Dermaplaning", "Glo2Facial", "Hydrafacial", "VIO Signature Facial", "Morpheus8 RF Microneedling", "SkinPen Microneedling", "IPL Therapy", "LED Light Therapy", "Perfect Derma Peel", "VI Peel", "EmSculpt NEO", "Hydrafacial Keravive", "Lipotropic Injections", "Weight Management / GLP-1 Therapy", "Hormone Replacement Therapy", "Personal Peptide Therapy"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!