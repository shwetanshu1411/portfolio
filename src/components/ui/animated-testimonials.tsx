'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'

interface Testimonial {
  name: string
  quote: string
  src: string | StaticImageData
}

export default function AnimatedTestimonials({
  testimonials,
}: {
  testimonials: Testimonial[]
}) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (!testimonials || testimonials.length === 0) return

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials])

  if (!testimonials || testimonials.length === 0 || !testimonials[index]) {
    return <div className="text-center py-8 text-gray-400">No testimonials available.</div>
  }

  return (
    <div className="relative h-80 w-full overflow-hidden text-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={`testimonial-${index}`}
          initial={{ opacity: 0, scale: 0.95, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.9, rotate: 5 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 origin-bottom"
        >
          <Image
            src={testimonials[index].src}
            alt={testimonials[index].name}
            width={64}
            height={64}
            className="mx-auto mb-4 w-16 h-16 rounded-full object-cover"
          />
          <p className="text-lg italic">{testimonials[index].quote}</p>
          <p className="mt-2 font-semibold text-gray-300">
            {testimonials[index].name}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
