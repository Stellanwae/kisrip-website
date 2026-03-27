export default {
  name: 'report',
  title: 'Reports',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'date',
      title: 'Publication Date',
      type: 'date'
    },
    {
      name: 'pages',
      title: 'Pages',
      type: 'number'
    },
    {
      name: 'pdfFile',
      title: 'PDF File',
      type: 'file'
    }
  ]
}