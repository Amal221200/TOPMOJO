import { urlFor } from "@/lib/sanityImageUrl";
import { Metadata } from "next";
import { getPost } from "@/lib/functions";
import { ServerPropsType } from "@/lib/interface";
import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import Image from "next/image";

const getTitle: (postSlug: string) => string = (postSlug: string) => {
    return postSlug.split('-').map((word) => `${word[0].toUpperCase()}${word.slice(1)}`).join(' ');
}

export async function generateMetadata({ params }: ServerPropsType): Promise<Metadata> {
    const { slug: postSlug } = params;
    const post = await getPost(postSlug as string);
    return {
        title: `Posts | ${getTitle(post.title)}`,
        description: post.description
    }
}

const BlogPage = async ({ params: { slug } }: { params: { slug: string } }) => {

    const proseClasses = 'prose dark:prose-invert prose-h1:text-6xl prose-h1:text-center prose-h3:text-2xl';

    const post = await getPost(slug);

    const PortableTextContent: Partial<PortableTextReactComponents> = {
        types: {
            image: ({ value }) => {
                return (
                    <Image src={urlFor(value)} alt="Image" height={800} width={800} priority className="mx-auto w-auto h-auto aspect-video" />
                )
            }
        }
    }
    
    return (
        <main className="">
            <div className={`${proseClasses} max-w-7xl px-4 py-4 mx-auto`}>
                <PortableText value={post.content} components={PortableTextContent} />
            </div>
        </main>
    );
}

export default BlogPage;