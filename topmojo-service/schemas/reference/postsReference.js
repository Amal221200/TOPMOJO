export default {
    name: 'post',
    type: 'array',
    title: 'Post',
    of: [
        {
            type: 'reference',
            to: [{ type: 'post' }]
        }
    ]
}