"use client"
import useFilteredPosts from "@/hooks/useFilteredPosts";
import { getFilteredPosts } from "@/lib/functions";
import { useEffect } from "react";

const Blogs = ({ category }: { category: string }) => {
    async function name() {
        const data = await getFilteredPosts('All')
        console.log(data);
    }

    useEffect(() => {
        name()
    }, [])

    return (
        <>
        </>
    );
}

export default Blogs;