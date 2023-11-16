import { HomePost, PostByCatgory } from "@/lib/interface";
import { formatTimeAgo } from "@/lib/relativeTime";
import Link from "next/link";
import HomeBlog from "./HomeBlog";

const HomeBlogs = ({ postByCategories }: { postByCategories: PostByCatgory[] }) => {

    return (
        <section className="min-h-[100dvh] py-5 md:py-8">
            <h2 className="text-zinc-950 dark:text-dark-primary text-center font-bold text-3xl md:text-5xl">Latest Articles</h2>
            <ul className="max-w-7xl mx-auto">
                {postByCategories.map((category) => (
                    <li className="my-4" key={category._id}>
                        <h4 className="text-zinc-950 dark:text-dark-primary font-bold text-xl mb-4">{category.name}</h4>
                        <div className="grid grid-cols-3 gap-3">
                            {category.posts.map((post: HomePost) => (
                                <HomeBlog post={post} key={post._id} />
                            ))}
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default HomeBlogs;