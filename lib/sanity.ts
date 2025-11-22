import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// Public client for frontend queries
export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-11-01',
  useCdn: true,
})

// Private client for mutations (needs token)
export const sanityClientPrivate = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-11-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
})

const builder = imageUrlBuilder(sanityClient)

export function urlFor(source: any) {
  return builder.image(source)
}

// GROQ queries
export const productsQuery = `*[_type == "product" && defined(slug.current)]{
  _id,
  name,
  description,
  price,
  "slug": slug.current,
  images,
  category,
  inStock
}`

export const productBySlugQuery = `*[_type == "product" && slug.current == $slug][0]{
  _id,
  name,
  description,
  price,
  "slug": slug.current,
  images,
  category,
  inStock
}`

export const servicesQuery = `*[_type == "service"]{
  _id,
  title,
  description,
  priceRange,
  duration,
  image,
  features
}`