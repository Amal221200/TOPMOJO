"use server"
import { CategoryType, PostType, HomePostType } from "./interface";
import { client } from "./sanity";

export async function getPosts(): Promise<PostType[]> {
    const query = `*[_type == 'post']{_id, _createdAt, title, description, "slug":slug.current,"categories": categories[]->{_id, name}} | order(_createdAt asc)`;
    const data = await client.fetch(query);
    return data;
}


export async function fetchPostsByCategories(categorySlug: string): Promise<HomePostType[]> {
    let query = '';
    if (categorySlug === 'All') {
        query = `*[_type == "post"]{_id,title,description,"image": image.asset->url,slug,"categories":categories[]->{name, "slug":slug.current},_createdAt} | order(_createdAt asc)`
    } else {
        query = `*[_type == "category" && slug.current == "${categorySlug}"]{name,"posts": posts[]->{_id,title,description,"image": image.asset->url,slug,"categories":categories[]->{name, "slug":slug.current},_createdAt}} | order(_createdAt asc)`
    }
    const data = await client.fetch(query);
    return categorySlug === 'All' ? data : data[0].posts
}

export async function getCatgories(): Promise<CategoryType[]> {
    const query = `*[_type == "category"]{_id, name, "slug": slug.current, "image": image.asset->url}`;
    const data = await client.fetch(query);
    return data;
}

export async function getPost(slug: string): Promise<PostType> {
    const query = `*[_type == 'post' && slug.current == "${slug}"]{_id, _createdAt, title, description, slug, content,"categories": categories[]->{_id, name}}[0]`;
    const data = await client.fetch(query);
    return data;
}

