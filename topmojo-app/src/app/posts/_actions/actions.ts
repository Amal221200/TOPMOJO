"use server";
import { HomePost } from "@/lib/interface";
import { client } from "@/lib/sanity";

export async function fetchPostsByCategories(categorySlug: string): Promise<HomePost[]> {
    let query = '';
    if (categorySlug === 'All') {
        query = `*[_type == "post"]{_id,title,description,"image": image.asset->url,slug,"categories":categories[]->{name, "slug":slug.current},_createdAt} | order(_createdAt asc)`
    } else {
        query = `*[_type == "category" && slug.current == "${categorySlug}"]{name,"posts": posts[]->{_id,title,description,"image": image.asset->url,slug,"categories":categories[]->{name, "slug":slug.current},_createdAt}} | order(_createdAt asc)`
    }
    const data = await client.fetch(query);
    return categorySlug === 'All' ? data : data[0].posts
}