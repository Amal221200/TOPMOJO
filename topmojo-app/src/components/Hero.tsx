import { client } from "@/lib/sanity";

async function getInfo(): Promise<{ name: string, description: string }> {
    "use server"
    const query = `*[_type == "info"]{name, description}[0]`;
    const data = await client.fetch(query);
    return data
}
const Hero = async () => {
    const info = await getInfo();
    
    return (
        <main className="min-h-[100dvh] w-full relative flex justify-center items-center bg-transparent">
            <div className="absolute w-full h-full bg-[url(/main-bg.jpg)] bg-[rgba(0,0,0,.2)] dark:bg-[url(/main-bg-dark.jpg)] dark:bg-[rgba(0,0,0,.5)] bg-blend-multiply bg-center bg-cover right-0 top-0 -z-10" />
            <div className="text-center md:max-w-[70vw] bg-transparent">
                <h1 className="my-4 font-bold text-4xl text-black dark:text-dark-primary">{info.name}</h1>
                <p className="leading-7 text-orange-700 dark:text-red-600 text-lg md:text-2xl font-semibold px-2 md:px-5">
                    {info.description}
                </p>
            </div>
        </main>
    );
}

export default Hero;