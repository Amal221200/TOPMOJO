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
        }
    ]
}