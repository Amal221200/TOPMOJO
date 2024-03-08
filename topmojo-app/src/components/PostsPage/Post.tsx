import Image from "next/image"
import Tags from "./Tags"
import Link from "next/link"
import React from "react"
import { HomePostType } from "@/lib/interface"

interface PostProps {
    post: HomePostType
}

const Post: React.FC<PostProps> = ({ post }) => {
    return (
        <Link href={`/posts/${post.slug.current}`} prefetch>
            <article className="h-full flex flex-col gap-2 bg-zinc-200 group hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 rounded-md overflow-hidden">
                {
                    post.image && <div className="w-full text-center h-52">
                        <Image src={post.image} alt={post.title} width={500} height={100} priority className="aspect-video rounded-t-md object-cover transition-transform scale-100 group-hover:scale-110 object-center h-full w-full" />
                    </div>
                }
                <div className="flex flex-col gap-1 p-3">
                    <Tags categories={post.categories} />
                    <h4 className="font-bold">{post.title}</h4>
                    <p className="line-clamp-4">{post.description}</p>
                </div>
            </article>
        </Link>
    )
}

export default Post