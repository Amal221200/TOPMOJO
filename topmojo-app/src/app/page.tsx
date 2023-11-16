import { Hero, HomeBlogs } from "@/components";
import { getPostsByCatgories } from "@/lib/functions";

export default async function Home() {
  const postsByCatgories = await getPostsByCatgories()

  return (
    <>
      <Hero />
      <HomeBlogs postByCategories={postsByCatgories} />
    </>
  )
}
