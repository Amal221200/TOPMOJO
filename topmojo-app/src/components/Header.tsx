import Link from "next/link";
import { ThemeButton } from "@/components";

const Header = () => {

    return (
        <header className={`flex bg-black/10 dark:bg-black/70 items-center justify-between w-full py-3 sticky top-0 left-0 right-0 z-[100]`}>
            <div className="pl-3">
                <Link href="/" className='text-orange-800 font-bold uppercase' prefetch>
                    <h4 className='md:text-3xl text-2xl'>Topmojo</h4>
                </Link>
            </div>
            <div className='flex items-center gap-4 pr-3'>
                <nav className=''>
                    <Link href="/posts" className="dark:text-white text-black"
                     prefetch>Blogs</Link>
                </nav>
                <ThemeButton />
            </div>
        </header>
    )
}

export default Header