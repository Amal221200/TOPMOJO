"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useState } from "react";

const ThemeButton = () => {
    const { setTheme, resolvedTheme } = useTheme();
    const [isMounted, setIsMounted] = useState<boolean>(false);

    const toggleTheme = useCallback(() => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
    }, [setTheme, resolvedTheme])

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) return null
    return (
        <button type="button" className="md:px-2 md:py-1 p-1 md:text-lg text-xs bg-black text-white dark:bg-white dark:text-black rounded shadow" onClick={toggleTheme}>
            {resolvedTheme === 'light' ? <Moon color='#fff' /> : <Sun color='#ff8400' />}
        </button>
    );
}

export default ThemeButton;