import { Product, Service } from '@/types'

export const mockProducts: Product[] = [
  {
    _id: '1',
    name: 'Premium Car Wax',
    description: 'High-quality car wax for ultimate shine and protection against UV rays and environmental contaminants.',
    price: 15000,
    slug: 'premium-car-wax',
    images: ['/images/products/wax.jpg'],
    category: 'detailing',
    inStock: true
  },
  {
    _id: '2',
    name: 'Interior Cleaner Kit',
    description: 'Complete interior cleaning kit for leather, plastic, and fabric surfaces.',
    price: 8500,
    slug: 'interior-cleaner-kit',
    images: ['/images/products/interior-cleaner.jpg'],
    category: 'cleaning',
    inStock: true
  },
  {
    _id: '3',
    name: 'Ceramic Coating',
    description: 'Professional-grade ceramic coating for long-lasting paint protection and hydrophobic properties.',
    price: 45000,
    slug: 'ceramic-coating',
    images: ['/images/products/ceramic-coating.jpg'],
    category: 'protection',
    inStock: true
  },
  {
    _id: '4',
    name: 'Wheel Cleaner',
    description: 'Specialized cleaner for alloy wheels and tires, removes brake dust and grime effectively.',
    price: 6500,
    slug: 'wheel-cleaner',
    images: ['/images/products/wheel-cleaner.jpg'],
    category: 'cleaning',
    inStock: true
  },
  {
    _id: '5',
    name: 'Headlight Restoration Kit',
    description: 'Complete kit to restore cloudy headlights to like-new condition.',
    price: 12000,
    slug: 'headlight-restoration-kit',
    images: ['/images/products/headlight-kit.jpg'],
    category: 'restoration',
    inStock: true
  },
  {
    _id: '6',
    name: 'Paint Touch-Up Pen',
    description: 'Factory-matched paint pen for quick touch-ups of scratches and chips.',
    price: 3500,
    slug: 'paint-touch-up-pen',
    images: ['/images/products/touch-up-pen.jpg'],
    category: 'paint',
    inStock: true
  }
]

export const mockServices: Service[] = [
  {
    _id: '1',
    title: 'Full Auto Body Repair',
    description: 'Comprehensive auto body repair including dent removal, panel beating, and structural repairs.',
    priceRange: '₦50,000 - ₦500,000',
    duration: '2-7 days',
    image: '/images/services/body-repair.jpg',
    features: [
      'Dent removal and repair',
      'Panel replacement',
      'Structural alignment',
      'Paint matching',
      'Quality assurance'
    ]
  },
  {
    _id: '2',
    title: 'Premium Car Detailing',
    description: 'Complete interior and exterior detailing to restore your vehicle to showroom condition.',
    priceRange: '₦25,000 - ₦150,000',
    duration: '4-8 hours',
    image: '/images/services/detailing.jpg',
    features: [
      'Exterior wash and wax',
      'Interior deep cleaning',
      'Leather conditioning',
      'Engine bay cleaning',
      'Paint decontamination'
    ]
  },
  {
    _id: '3',
    title: 'Paint Correction',
    description: 'Professional paint correction to remove swirl marks, scratches, and oxidation.',
    priceRange: '₦75,000 - ₦200,000',
    duration: '1-2 days',
    image: '/images/services/paint-correction.jpg',
    features: [
      'Swirl mark removal',
      'Scratch repair',
      'Paint polishing',
      'Ceramic coating ready',
      'Long-lasting protection'
    ]
  },
  {
    _id: '4',
    title: 'Ceramic Coating',
    description: 'Advanced ceramic coating application for ultimate paint protection and gloss enhancement.',
    priceRange: '₦100,000 - ₦300,000',
    duration: '2-3 days',
    image: '/images/services/ceramic-coating.jpg',
    features: [
      '9H hardness coating',
      'Hydrophobic properties',
      'UV protection',
      'Chemical resistance',
      '2-5 years warranty'
    ]
  },
  {
    _id: '5',
    title: 'Interior Deep Cleaning',
    description: 'Thorough interior cleaning and sanitization for a fresh and healthy cabin environment.',
    priceRange: '₦15,000 - ₦45,000',
    duration: '3-6 hours',
    image: '/images/services/interior-cleaning.jpg',
    features: [
      'Seat shampooing',
      'Carpet deep cleaning',
      'AC system sanitization',
      'Leather treatment',
      'Odor elimination'
    ]
  },
  {
    _id: '6',
    title: 'Headlight Restoration',
    description: 'Professional headlight restoration to improve visibility and appearance.',
    priceRange: '₦8,000 - ₦20,000',
    duration: '1-2 hours',
    image: '/images/services/headlight-restoration.jpg',
    features: [
      'Yellowing removal',
      'UV protective coating',
      'Improved night visibility',
      'Like-new appearance',
      '6 months warranty'
    ]
  }
]