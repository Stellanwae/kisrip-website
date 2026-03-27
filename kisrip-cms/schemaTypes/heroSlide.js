export default {
  name: 'heroSlide',
  title: 'Hero Carousel Slides',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Slide Title',
      type: 'string',
      description: 'Main heading for this slide',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Slide Description',
      type: 'text',
      description: 'Brief description that appears on the slide',
      rows: 2,
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: 'Background Image',
      type: 'image',
      description: 'Large image for the carousel background',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'linkTo',
      title: 'Link To',
      type: 'string',
      description: 'Where should this slide link to?',
      options: {
        list: [
          {title: 'None (No Link)', value: ''},
          {title: 'Projects Page', value: '/projects'},
          {title: 'News Page', value: '/news'},
          {title: 'Specific Project', value: 'project'},
          {title: 'Specific News', value: 'news'}
        ]
      }
    },
    {
      name: 'project',
      title: 'Linked Project',
      type: 'reference',
      to: [{type: 'project'}],
      hidden: ({ parent }) => parent?.linkTo !== 'project'
    },
    {
      name: 'news',
      title: 'Linked News',
      type: 'reference',
      to: [{type: 'news'}],
      hidden: ({ parent }) => parent?.linkTo !== 'news'
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Slides will appear in ascending order (1, 2, 3...)',
      validation: Rule => Rule.required().min(1)
    },
    {
      name: 'active',
      title: 'Active',
      type: 'boolean',
      description: 'Is this slide visible on the website?',
      initialValue: true
    }
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}]
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'image'
    }
  }
}