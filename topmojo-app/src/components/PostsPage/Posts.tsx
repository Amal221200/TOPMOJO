"use client";
import PostsHeader from "@/components/PostsPage/PostsHeader";
import { useState } from "react";
import PostsSection from "./PostsSection";

const Posts = () => {
    const [category, setCategory] = useState<string>('All')
    
    return (
        <div className="max-w-7xl px-2 h-full md:px-4 border border-white mx-auto">
            <PostsHeader category={category} setCategory={setCategory} />
            <PostsSection />
        </div>
    );
}

export default Posts;