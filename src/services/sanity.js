import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const projectId = 'yr5dhxrb'

export const client = createClient({
  projectId: projectId,
  dataset: 'production',
  apiVersion: '2024-03-26',
  useCdn: true,
})

const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)

// Format news data - FIXED to handle both formats
export const formatNews = (item) => ({
  id: item._id,
  title: item.title,
  slug: item.slug?.current || item.slug,
  date: item.date,
  summary: item.summary,
  content: item.content,
  image: item.image ? urlFor(item.image).url() : null,
  published: item.published
})

// Format project data
export const formatProject = (item) => ({
  id: item._id,
  name: item.name,
  slug: item.slug?.current || item.slug,
  location: item.location,
  status: item.status,
  description: item.description,
  startDate: item.startDate,
  completionDate: item.completionDate,
  budget: item.budget,
  beneficiaries: item.beneficiaries,
  image: item.image ? urlFor(item.image).url() : null
})

// Format report data
export const formatReport = (item) => ({
  id: item._id,
  title: item.title,
  slug: item.slug?.current || item.slug,
  description: item.description,
  date: item.date,
  pages: item.pages,
  pdfUrl: item.pdfFile?.asset?.url ? 
    `https://cdn.sanity.io/files/${projectId}/production/${item.pdfFile.asset._ref.split('-')[1]}.pdf` : 
    null
})

// NEW: Format hero slide data
export const formatHeroSlide = (item) => ({
  id: item._id,
  title: item.title,
  description: item.description,
  image: item.image ? urlFor(item.image).url() : null,
  linkTo: item.linkTo,
  projectSlug: item.projectSlug,
  newsSlug: item.newsSlug,
  order: item.order,
  active: item.active
})

// GROQ Queries
export const queries = {
  // Get all published news
  getAllNews: `*[_type == "news" && published == true] | order(date desc) {
    _id,
    title,
    slug,
    date,
    summary,
    image,
    published
  }`,
  
  // Get single news by slug - FIXED QUERY
  getNewsBySlug: `*[_type == "news" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    date,
    summary,
    content,
    image
  }`,
  
  // Get all projects
  getAllProjects: `*[_type == "project"] | order(_createdAt desc) {
    _id,
    name,
    slug,
    location,
    status,
    description,
    startDate,
    completionDate,
    budget,
    beneficiaries,
    image
  }`,
  
  // Get projects by status
  getProjectsByStatus: `*[_type == "project" && status == $status] {
    _id,
    name,
    slug,
    location,
    status,
    description,
    startDate,
    completionDate,
    budget,
    beneficiaries,
    image
  }`,
  
  // Get single project by slug
  getProjectBySlug: `*[_type == "project" && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    location,
    status,
    description,
    startDate,
    completionDate,
    budget,
    beneficiaries,
    image
  }`,
  
  // Get all reports
  getAllReports: `*[_type == "report"] | order(date desc) {
    _id,
    title,
    slug,
    description,
    date,
    pages,
    pdfFile
  }`,
  
  // Get featured content for homepage
  getFeaturedContent: `{
    "featuredNews": *[_type == "news" && published == true] | order(date desc)[0...3] {
      _id,
      title,
      "slug": slug.current,
      date,
      summary,
      image
    },
    "featuredProjects": *[_type == "project"] | order(_createdAt desc)[0...3] {
      _id,
      name,
      "slug": slug.current,
      location,
      status,
      description,
      image
    },
    "featuredReports": *[_type == "report"] | order(date desc)[0...3] {
      _id,
      title,
      "slug": slug.current,
      description,
      date
    }
  }`,
  
  // NEW: Get hero carousel slides
  getHeroSlides: `*[_type == "heroSlide" && active == true] | order(order asc) {
    _id,
    title,
    description,
    image,
    linkTo,
    "projectSlug": project->slug.current,
    "newsSlug": news->slug.current,
    order,
    active
  }`
}