import authorReference from "./references/authorReference";
import categoriesReference from "./references/categoriesReference";

export default {
    name: 'post',
    type: 'document',
    title: 'Post',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
            required: true
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description',
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'title'
            }
        },
        {
            ...authorReference
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image',
        },
        {
            name: 'content',
            type: 'array',
            title: 'Content',
            of: [
                {
                    "type": "block",
                },
                {
                    type: "image",
                    fields: [
                        {
                            name: 'alt',
                            type: 'string',
                            title: 'Alternative Text'
                        }
                    ]
                }
            ]
        },
        {
            ...categoriesReference
        }
    ]
}