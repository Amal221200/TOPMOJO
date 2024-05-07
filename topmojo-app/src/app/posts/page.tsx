import { ServerPropsType } from "@/lib/interface";
import { Metadata } from "next";
import { fetchPostsByCategories, getCategory } from "@/lib/actions";
import Post from "@/components/PostsPage/Post";

export const revalidate = 20;
const categoryStringify: (categorySlug: string) => string = (categorySlug: string) => {
    return categorySlug.split('-').map((word) => `${word[0].toUpperCase()}${word.slice(1)}`).join(' ');
}

export async function generateMetadata({ searchParams }: ServerPropsType): Promise<Metadata> {
    const { categorySlug } = searchParams;

    let category = null;
    if (categorySlug !== 'All') {
        category = await getCategory(categorySlug as string)
    }

    return {
        title: `Posts | ${categoryStringify(categorySlug as string)}`,
        description: `Posts related to ${category?.name.toLowerCase()}.`,
        keywords: categorySlug === 'All' ? [''] : category?.keywords
    }
}

const PostsPage: React.FC<ServerPropsType> = async ({ searchParams }) => {
    const { categorySlug } = searchParams;
    const posts = await fetchPostsByCategories(categorySlug as string);
    return (
        <main className="min-h-[100dvh] py-3 w-full max-w-7xl mx-auto px-4">
            <h2 className="text-5xl font-semibold">{categoryStringify(categorySlug as string)}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3 mt-4">
                {
                    posts.map(post => (
                        <Post key={post._id} post={post} />
                    ))
                }
            </div>
        </main>
    );
}

export default PostsPage;