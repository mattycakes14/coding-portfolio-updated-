export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'headerTitle',
      title: 'Header Title',
      type: 'string',
      description: 'The main headline (e.g., "Hey, I\'m Matt! Full-stack Developer & AI Engineer")',
    },
    {
      name: 'headerDescription',
      title: 'Header Description',
      type: 'text',
      description: 'The subtitle/bio under the main headline',
    },
    {
      name: 'socialLinks',
      title: 'Social Links',
      type: 'object',
      fields: [
        { name: 'github', title: 'GitHub URL', type: 'url' },
        { name: 'linkedin', title: 'LinkedIn URL', type: 'url' },
        { name: 'twitter', title: 'Twitter URL', type: 'url' },
      ],
    },
    {
      name: 'headerImage',
      title: 'Header Image',
      type: 'image',
      options: { hotspot: true },
    },
  ],
  preview: {
    prepare() {
      return { title: 'Site Settings' }
    },
  },
}