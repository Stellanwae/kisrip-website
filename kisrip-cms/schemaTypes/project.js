export default {
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Project Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string'
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'Ongoing', value: 'ongoing'},
          {title: 'In Progress', value: 'in-progress'},
          {title: 'Completed', value: 'completed'}
        ]
      }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4
    },
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'date'
    },
    {
      name: 'completionDate',
      title: 'Expected Completion',
      type: 'date'
    },
    {
      name: 'budget',
      title: 'Budget',
      type: 'string'
    },
    {
      name: 'beneficiaries',
      title: 'Beneficiaries',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Project Image',
      type: 'image'
    }
  ]
}