import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name of dish',
      type: 'string',
      validation:Rule=>Rule.required()
    }),
    defineField({
      name: 'short_description',
      title: 'short description',
      type: 'string',
      validation:Rule=>Rule.required()
    }),
    defineField({
      name: 'price',
      title: 'Price of the dish in G&P',
      type: 'number'
    }),
    defineField({
      name: 'image',
      title: 'Dish Image',
      type: 'image',
    }),
  ]
})
