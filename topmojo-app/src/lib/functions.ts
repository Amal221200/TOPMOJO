import { Post, PostByCatgories } from "./interface";
import { client } from "./sanity";

export async function getPosts(): Promise<Post[]> {
    const query = `*[_type == 'post']{_id, _createdAt, title, description, slug,"categories": categories[]->{_id, name}}`;
    const data = await client.fetch(query);
    return data;
}

export async function getPostsByCatgories(): Promise<PostByCatgories[]> {
    const query = `*[_type == "category" && defined(posts)]{_id, name, "posts": posts[]->{_id, _createdAt, title, description, slug}}`;
    const data = await client.fetch(query);
    return data;
}

export async function getPost(slug: string): Promise<Post> {
    const query = `*[_type == 'post' && slug.current == "${slug}"]{_id, _createdAt, title, description, slug, content,"categories": categories[]->{_id, name}}[0]`;
    const data = await client.fetch(query);
    return data;
}

