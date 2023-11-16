import useSWR from "swr"
import { getCatgories } from "@/lib/functions"

const useCategories = () => {
    const { data, error, isLoading } = useSWR('categories', getCatgories);

    return { data, error, isLoading };
}

export default useCategories