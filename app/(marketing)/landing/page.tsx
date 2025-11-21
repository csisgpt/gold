import { LandingHero } from '@/components/landing/hero'
import { TrustBadges } from '@/components/landing/trust-badges'
import { LandingFeatures } from '@/components/landing/features'
import { LandingSteps } from '@/components/landing/steps'
import { PricingCalculator } from '@/components/landing/pricing-calculator'
import { LandingTestimonials } from '@/components/landing/swiper-testimonials'
import { LandingFaqSection } from '@/components/landing/faq-section'

export default function LandingPage() {
  return (
    <div className="space-y-10">
      <LandingHero />
      <TrustBadges />
      <LandingFeatures />
      <LandingSteps />
      <PricingCalculator />
      <LandingTestimonials />
      <LandingFaqSection />
    </div>
  )
}
