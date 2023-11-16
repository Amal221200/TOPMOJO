"use client";
import useCategories from "@/hooks/useCategories";
import { Dispatch, SetStateAction, useCallback } from "react";

interface BlogsHeaderType {
    category: string,
    setCategory: Dispatch<SetStateAction<string>>
}

const BlogsHeader: React.FC<BlogsHeaderType> = ({ category, setCategory }) => {
    const { data: categories, isLoading } = useCategories();

    const changeCategory = useCallback((category: string) => {
        setCategory(category)
    }, [setCategory])


    if (isLoading || !categories) return null;

    return (
        <header>
            <div className="flex items-center gap-3">
                {[{ _id: crypto.randomUUID(), name: 'All' }, ...categories]?.map((category) => (
                    <button key={category._id} onClick={() => changeCategory(category.name)} type="button" className="dark:bg-yellow-200 dark:text-amber-950 px-4 py-2 rounded-md">
                        {category.name}
                    </button>
                ))}
            </div>
        </header>
    );
}

export default BlogsHeader;