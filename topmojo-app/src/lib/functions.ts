import { Category, Post, PostByCatgory } from "./interface";
import { client } from "./sanity";

export async function getPosts(): Promise<Post[]> {
    const query = `*[_type == 'post']{_id, _createdAt, title, description, slug,"categories": categories[]->{_id, name}}`;
    const data = await client.fetch(query);
    return data;
}

export async function getPostsByCatgories(): Promise<PostByCatgory[]> {
    const query = `*[_type == "category" && defined(posts)]{_id, name, "posts": posts[]->{_id, _createdAt, title, description, slug}}`;
    const data = await client.fetch(query);
    return data;
}
export async function getFilteredPosts(query: string): Promise<PostByCatgory[]> {
    const data = await client.fetch(query);
    return data;
}

export async function getCatgories(): Promise<Category[]> {
    const query = `*[_type == "category"]{_id, name}`;
    const data = await client.fetch(query);
    return data;
}

export async function getPost(slug: string): Promise<Post> {
    const query = `*[_type == 'post' && slug.current == "${slug}"]{_id, _createdAt, title, description, slug, content,"categories": categories[]->{_id, name}}[0]`;
    const data = await client.fetch(query);
    return data;
}

