import useSWR from "swr"
import { getPost } from "@/lib/functions"

const usePost = () => {
    const { data, error, isLoading } = useSWR('post', getPost);

    return { data, error, isLoading };
}

export default usePost