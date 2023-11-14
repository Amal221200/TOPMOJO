import useSWR from "swr"
import { getPosts } from "@/lib/functions"

const usePosts = () => {
    const { data, error, isLoading } = useSWR('posts', getPosts);

    return { data, error, isLoading };
}

export default usePosts