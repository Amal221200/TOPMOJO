export interface PostType {
    _id: string,
    title: string,
    description: string,
    slug: string,
    content: any,
    categories: Array<{ name: string }>,
    _createdAt: string,
    keywords: Array<string>
}

export interface HomePostType {
    _id: string,
    title: string,
    description: string
    slug: { current: string },
    _createdAt: string,
    image?: string,
    categories: Array<{ name: string, slug: string }>
}

export interface CategoryType {
    _id: string,
    name: string,
    slug: string,
    image: string,
    keywords: Array<string>
}

export interface PostByCatgoryType {
    _id: string,
    name: string,
    _createdAt: string,
    posts: Array<HomePostType>
}

export interface ServerPropsType {
    params: { [key: string]: string | undefined }
    searchParams: { [key: string]: string | string[] | undefined }
}