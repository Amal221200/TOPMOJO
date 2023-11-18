import { getPosts } from "@/lib/functions";
import { PostType } from "@/lib/interface";
import { formatTimeAgo } from "@/lib/relativeTime";
import Link from "next/link";

interface HomeBlogProps {
    post: PostType
}

const HomeBlog: React.FC<HomeBlogProps> = ({ post }) => {
    return (
        <Link href={`/posts/${post.slug}`} prefetch >
            <article className="bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 rounded-md py-2 px-3 md:py-4 md:px-5">
                <header className="">
                    <h6 className="font-bold text-black dark:text-dark-primary text-sm md:text-base flex flex-col items-start mb-2 md:mb-3 pr-2">
                        {post.title}
                        <span className="font-normal text-sm text-zinc-900/80 dark:text-zinc-400/70">
                            {formatTimeAgo(new Date(post._createdAt))}
                        </span>
                    </h6>
                </header>
                <p className="line-clamp-3 md:line-clamp-4 text-sm md:text-base">{post.description}</p>
            </article>
        </Link>
    );
}


const HomeBlogs = async () => {
    const posts = await getPosts();
    return (
        <section className=" py-5 px-2 md:py-8">
            <h2 className="text-zinc-950 dark:text-dark-primary text-center font-bold text-3xl md:text-5xl">Latest Articles</h2>
            <ul className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-3 my-3">
                {
                    posts.map(post => (
                        <HomeBlog key={post._id} post={post}/>
                    ))
                }
            </ul>
        </section>
    );
}

export default HomeBlogs;