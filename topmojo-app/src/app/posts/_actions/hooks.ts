import useSWR from "swr";
import { fetchPostsByCategories } from "./actions";
import { HomePost } from "@/lib/interface";

export const useFetchPostsByCategories = (category: string): { data: HomePost[], isLoading: boolean, error: boolean } => {
    let query = '';
    if (category === 'All') {
        query = `*[_type == "post"]{_id,title,description,slug,content,_createdAt} | order(_createdAt asc)`
    } else {
        query = `*[_type == "category" && name == "${category}"]{name,"posts": posts[]->{_id,title,description,slug,content,_createdAt}} | order(_createdAt asc)`
    }
    const { data, isLoading, error } = useSWR(query, fetchPostsByCategories);

    return { data: category === 'All' ? data : data?.at(0)?.posts, isLoading, error }
}