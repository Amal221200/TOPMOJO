export interface Post {
    _id: string,
    title: string,
    description: string,
    slug: { current: string },
    content: any,
    categories: { name: string }[]
    _createdAt: string
}
export interface PostByCatgories {
    _id: string,
    name: string,
    _createdAt: string,
    posts: {
        _id: string,
        title: string,
        description: string,
        slug: { current: string },
        _createdAt: string
    }[]
}