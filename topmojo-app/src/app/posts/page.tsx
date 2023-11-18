import Image from "next/image";
import { fetchPostsByCategories } from "./_actions/actions";
import Link from "next/link";
import Tags from "./_components/Tags";
// import { revalidatePath } from "next/cache";

const PostsPage = async ({ searchParams }: { searchParams: { categorySlug: string } }) => {
    const { categorySlug } = searchParams
    const posts = await fetchPostsByCategories(categorySlug)
    const category: (categorySlug: string) => string = (categorySlug: string) => categorySlug.split('-').map((word) => `${word[0].toUpperCase()}${word.slice(1)}`).join(' ');
    // revalidatePath(`/posts?categorySlug=${categorySlug}`)
    return (
        <main className="h-[100dvh] py-3 w-full max-w-7xl mx-auto px-4">
            <h2 className="text-5xl font-semibold">{category(categorySlug)}</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-4">
                {
                    posts.map(post => (
                        <Link key={post._id} href={`/posts/${post.slug.current}`} prefetch>
                            <article className="flex flex-col gap-2 bg-zinc-200 group hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 rounded-md">
                                {post.image && <div className="w-full text-center overflow-hidden">
                                    <Image src={post.image} alt={post.title} width={300} height={150} priority className="aspect-video rounded-t-md object-cover transition-transform scale-100 group-hover:scale-110 object-center" />
                                </div>}
                                <div className="flex flex-col gap-1 p-3">
                                    <Tags categories={post.categories} />
                                    <h4 className="font-bold">{post.title}</h4>
                                    <p className="line-clamp-4">{post.description}</p>
                                </div>
                            </article>
                        </Link>
                    ))
                }
            </div>
        </main>
    );
}

export default PostsPage;