import postsReference from "./reference/postsReference"

export default {
    name: 'author',
    title: 'Author',
    type: 'document',

    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            ...postsReference
        }
    ]
}