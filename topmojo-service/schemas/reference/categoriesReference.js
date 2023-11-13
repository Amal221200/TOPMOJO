export default {
    name: 'categories',
    type: 'array',
    title: 'Categories',
    of: [
        {
            type: 'reference',
            to: [{ type: 'category' }]
        }
    ]
}