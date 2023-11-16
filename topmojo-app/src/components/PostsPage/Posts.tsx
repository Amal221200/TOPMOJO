"use client";
import PostsHeader from "@/components/PostsPage/PostsHeader";
import PostsSection from "@/components/PostsPage/PostsSection";
import { useState } from "react";

const Posts = () => {

    const [category, setCategory] = useState('All')
    const handleAction = (formData: FormData) => {
        setCategory(formData.get('category') as string)
    }


    return (
        <div className="max-w-7xl px-2 h-full md:px-4 mx-auto">
            <PostsHeader setCategory={handleAction} />
            <PostsSection category={category} key={category} />
        </div>
    );
}

export default Posts;