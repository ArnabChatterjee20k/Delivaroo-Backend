import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Restaurant Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'short_description',
      title: 'Short Description',
      type: 'string',
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'image',
      title: 'Image of the restaurant',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'lat',
      title: 'Latitude of the restaurant',
      type: 'number',
    }),
    defineField({
      name: 'long',
      title: 'Longitude of the restaurant',
      type: 'number',
    }),
    defineField({
      name: 'address',
      title: 'Restaurant Address',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Enter a number from 1 to 5',
      type: 'string',
      validation: (Rule) =>
        Rule.required().min(1).max(5).error('Please enter a number between 1 to 5'),
    }),
    defineField({
      name:'Category',
      title:"Category",
      validation:(Rule)=>Rule.required(),
      type:"reference",
      to:[{type:"category"}]
    }),
    defineField({
      name:'dishes',
      title:"Dishes",
      type:"array",
      of:[{type:"reference",to:[{type:"dish"}]}]// since we are using array so we are making an array of references to dish
    })
  ],
})
