'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { testimonials } from '@/lib/mock-data'

export const LandingTestimonials = () => (
  <section className="rounded-2xl border border-border bg-card p-8">
    <h2 className="mb-4 text-2xl font-bold text-primary">تجربه مشتریان</h2>
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={24}
      slidesPerView={1}
      autoplay={{ delay: 4000 }}
      pagination={{ clickable: true }}
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      }}
    >
      {testimonials.map((testimonial) => (
        <SwiperSlide key={testimonial.name}>
          <div className="h-full rounded-2xl border border-border/70 bg-muted/30 p-4">
            <p className="text-sm text-muted-foreground">{testimonial.message}</p>
            <p className="mt-4 font-semibold">{testimonial.name}</p>
            <p className="text-xs text-muted-foreground">{testimonial.role}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
)
