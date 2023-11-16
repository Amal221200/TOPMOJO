"use client";
import useCategories from "@/hooks/useCategories";

interface BlogsHeaderType {
    setCategory: (formData: FormData) => void
}

const BlogsHeader: React.FC<BlogsHeaderType> = ({ setCategory }) => {
    const { data: categories, isLoading } = useCategories();
    if (isLoading || !categories) return null;
    return (
        <header>
            <div className="flex items-center gap-3">
                {[{ _id: crypto.randomUUID(), name: 'All' }, ...categories]?.map((category) => (
                    <form key={category._id}>
                        <input type="hidden" name="category" value={category.name} />
                        <button formAction={setCategory} type="submit" className="dark:bg-yellow-200 dark:text-amber-950 px-4 py-2 rounded-md">
                            {category.name}
                        </button>
                    </form>
                ))}
            </div>
        </header>
    );
}

export default BlogsHeader;