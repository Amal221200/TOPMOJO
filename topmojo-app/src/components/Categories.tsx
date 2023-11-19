import { getCatgories } from "@/lib/functions";
import { CategoryType } from "@/lib/interface";
import Image from "next/image";
import Link from "next/link";


const Category: React.FC<{ category: CategoryType }> = ({ category }) => {
    return (
        <Link href={`/posts?categorySlug=${category.slug}`} prefetch>
            <div className="w-full p-1 sm:p-3 flex justify-start items-center gap-3 transition-colors bg-zinc-300 hover:bg-zinc-400 hover:dark:bg-zinc-600 dark:bg-zinc-700 rounded-2xl">
                <div className="w-9 h-9 sm:w-12 sm:h-12">
                    <Image src={category.image} alt={category.slug} width={150} height={150} className="rounded-full object-cover aspect-square h-full w-full" priority />
                </div>
                <h6 className="font-semibold text-[12px] sm:text-sm">{category.name}</h6>
            </div>
        </Link>
    )
}

const Categories = async () => {
    const categories = await getCatgories()
    return (
        <section className="max-w-7xl p-3 mx-auto my-2 border-b border-b-gray-300 dark:border-b-gray-600">
            <h2 className="text-zinc-950 dark:text-dark-primary text-center font-bold text-3xl md:text-5xl">
                Popular Categories
            </h2>
            <div className="my-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                {
                    categories.map(category => (
                        <Category key={category._id} category={category} />
                    ))
                }
            </div>
        </section>
    );
}

export default Categories;