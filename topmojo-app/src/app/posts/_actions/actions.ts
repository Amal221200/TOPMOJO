"use server";

import { HomePost } from "@/lib/interface";
import { client } from "@/lib/sanity";

export async function fetchPostsByCategories(query: string) {
    const data = await client.fetch(query);
    return data
}