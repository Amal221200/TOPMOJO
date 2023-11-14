import { Hero, HomeBlogs } from "@/components";
import { getPosts, getPostsByCatgories } from "@/lib/functions";
import { formatTimeAgo } from "@/lib/relativeTime";

export default async function Home() {
  const postsByCatgories = await getPostsByCatgories()
  console.log(formatTimeAgo(new Date(postsByCatgories[0].posts[1]._createdAt)));

  return (
    <>
      <Hero />
      <HomeBlogs />
    </>
  )
}
