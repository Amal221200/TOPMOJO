export interface Post {
    _id: string,
    title: string,
    description: string,
    slug: { current: string },
    content: any,
    categories: { name: string }[]
    _createdAt: string
}

export interface HomePost {
    _id: string,
    title: string,
    description: string
    slug: { current: string },
    _createdAt: string,
    image?: string,
    categories: Array<{ name: string, slug: string }>
}

export interface Category {
    _id: string,
    name: string
}
export interface PostByCatgory {
    _id: string,
    name: string,
    _createdAt: string,
    posts: HomePost[]
}
export interface ServerProps {
    params: { [key: string]: string | undefined }
    searchParams: { [key: string]: string | string[] | undefined }
}