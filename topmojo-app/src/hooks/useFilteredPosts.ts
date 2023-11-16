import useSWR from "swr"
import { getFilteredPosts } from "@/lib/functions"

const useFilteredPosts = (category: string) => {
    
    const { data, error, isLoading } = useSWR(`*[_type == "category"${category === 'All' ? '' : ` && name == "Anime"`}]{name,"posts": posts[]->{title}}`, getFilteredPosts);

    return { data, error, isLoading };
}

export default useFilteredPosts