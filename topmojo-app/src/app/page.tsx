import { Hero, HomeBlogs, Categories } from "@/components";
import { revalidatePath } from "next/cache";

export default async function Home() {
// revalidatePath("/")
  return (
    <>
      <Hero />
      <Categories />
      <HomeBlogs />
    </>
  )
}
