import { Rule } from "sanity";
export default {
    name: 'category',
    type: 'document',
    title: 'Category',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name',
            validation: (Rule: Rule)=> Rule.required(),
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image',
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternate Text'
                }
            ]
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            validation: (Rule: Rule)=> Rule.required(),
            options: {
                source: 'name'
            }
        },
        {
            name: 'keywords',
            title: 'Keywords',
            type: 'array',
            validation: (Rule: Rule)=> Rule.required(),
            of: [
                {
                    type: 'string'
                }
            ]
        }
    ]
}