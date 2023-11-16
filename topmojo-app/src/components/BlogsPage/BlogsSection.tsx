"use client";
import BlogsHeader from "@/components/BlogsPage/BlogsHeader";
import { useState } from "react";
import Blogs from "./Blogs";

const BlogsSection = () => {
    const [category, setCategory] = useState<string>('All')
    
    return (
        <div className="max-w-7xl px-2 h-full md:px-4 border border-white mx-auto">
            <BlogsHeader category={category} setCategory={setCategory} />
            <Blogs />
        </div>
    );
}

export default BlogsSection;