"use client"

import { useFetchPostsByCategories } from "@/app/posts/_actions/hooks";
import Link from "next/link";

const PostsSection = ({ category }: { category: string }) => {
    const { data: posts, isLoading } = useFetchPostsByCategories(category);

    if (isLoading) return null
    return (
        <main className="my-4 h-full">
            <div className="max-w-7xl grid justify-center grid-cols-[repeat(1,minmax(0,250px))] xs:grid-cols-[repeat(2,minmax(220px,500px))] md:grid-cols-[repeat(3,minmax(250px,500px))] gap-3">
                {
                    posts.map((post) => (
                        <Link key={post._id} href={`/posts/${post.slug.current}`} prefetch>
                            <article className="bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 rounded-md py-2 px-3 md:py-4 md:px-5">
                                <h3 className="font-bold text-black dark:text-dark-primary text-sm md:text-xl flex flex-col items-start mb-2 md:mb-3 pr-2">{post.title}</h3>
                                <p className="text-md line-clamp-4">{post.description}</p>
                            </article>
                        </Link>
                    ))
                }
            </div>
        </main>
    );
}

export default PostsSection;