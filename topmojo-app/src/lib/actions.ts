"use server";
import { CategoryType, PostType, HomePostType } from "./interface";
import { client } from "./sanity";
import { GET_CATEGORIES, GET_CATEGORY, GET_INFO_QUERY, GET_POST_ALL_QUERY, GET_POST_BY_CATEGORY_QUERY, GET_POST_QUERY, GET_POSTS_QUERY } from "./queries";

export async function getInfo(): Promise<{ name: string, description: string }> {
    const data = await client.fetch(GET_INFO_QUERY);
    return data
}

export async function getPosts(): Promise<PostType[]> {
    const data = await client.fetch(GET_POSTS_QUERY);
    return data;
}

export async function fetchPostsByCategories(categorySlug: string): Promise<HomePostType[]> {
    const query = categorySlug === 'All' ? GET_POST_ALL_QUERY : GET_POST_BY_CATEGORY_QUERY(categorySlug);
    const data = await client.fetch(query);
    return data
}

export async function getCatgories(): Promise<CategoryType[]> {
    const data = await client.fetch(GET_CATEGORIES);
    return data;
}

export async function getCategory(slug: string): Promise<CategoryType> {
    const data = await client.fetch(GET_CATEGORY(slug));
    return data;
}

export async function getPost(slug: string): Promise<PostType> {
    const data = await client.fetch(GET_POST_QUERY(slug));
    return data;
}

