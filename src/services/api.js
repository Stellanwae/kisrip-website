import { client, queries, formatNews, formatProject, formatReport, formatHeroSlide } from './sanity'

// News API
export const newsAPI = {
  getAll: async () => {
    const data = await client.fetch(queries.getAllNews)
    return data.map(formatNews)
  },
  
  getBySlug: async (slug) => {
    const data = await client.fetch(queries.getNewsBySlug, { slug: slug })
    return data ? formatNews(data) : null
  }
}

// Projects API
export const projectsAPI = {
  getAll: async () => {
    const data = await client.fetch(queries.getAllProjects)
    return data.map(formatProject)
  },
  
  getBySlug: async (slug) => {
    const data = await client.fetch(queries.getProjectBySlug, { slug: slug })
    return data ? formatProject(data) : null
  },
  
  getByStatus: async (status) => {
    const data = await client.fetch(queries.getProjectsByStatus, { status: status })
    return data.map(formatProject)
  }
}

// Reports API
export const reportsAPI = {
  getAll: async () => {
    const data = await client.fetch(queries.getAllReports)
    return data.map(formatReport)
  }
}

// NEW: Hero Slides API
export const heroSlidesAPI = {
  getAll: async () => {
    const data = await client.fetch(queries.getHeroSlides)
    return data.map(formatHeroSlide)
  }
}

// Homepage API
export const homepageAPI = {
  getFeaturedContent: async () => {
    const data = await client.fetch(queries.getFeaturedContent)
    return {
      featuredNews: data.featuredNews.map(formatNews),
      featuredProjects: data.featuredProjects.map(formatProject),
      featuredReports: data.featuredReports.map(formatReport)
    }
  }
}