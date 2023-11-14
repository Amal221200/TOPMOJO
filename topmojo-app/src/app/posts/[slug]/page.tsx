import { getPost } from "@/lib/functions";


const BlogPage = async({ params: { slug } }: { params: { slug: string } }) => {
    const data = await getPost(slug)
    console.log(data.categories);
    
    return ( <></> );
}

export default BlogPage;