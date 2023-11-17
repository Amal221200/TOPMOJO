import postsReference from "./reference/postsReference";

export default {
    name: 'category',
    type: 'document',
    title: 'Category',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            ...postsReference
        },
        {
            name: 'image',
            type: 'image',
            title:'Image',
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternate Text'
                }
            ]
        }
    ]
}