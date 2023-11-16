import { HomePost } from "@/lib/interface";
import { formatTimeAgo } from "@/lib/relativeTime";
import Link from "next/link";

interface HomeBlogType {
    post: HomePost
}

const HomeBlog: React.FC<HomeBlogType> = ({ post }) => {
    return (
        <Link href={`/posts/${post.slug.current}`} key={post._id} prefetch >
            <article className="bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 rounded-md py-4 px-5">
                <header className="">
                    <h6 className="font-bold text-black dark:text-dark-primary flex justify-between items-center mb-3 pr-2">
                        {post.title}
                        <span className="font-bold text-sm text-zinc-900/80 dark:text-zinc-400/70">
                            {formatTimeAgo(new Date(post._createdAt))}
                        </span>
                    </h6>
                </header>
                <p className="line-clamp-3">{post.description}</p>
            </article>
        </Link>
    );
}

export default HomeBlog;