export default {
    name: 'posts',
    type: 'array',
    title: 'Posts',
    of: [
        {
            type: 'reference',
            to: [{ type: 'post' }]
        }
    ]
}