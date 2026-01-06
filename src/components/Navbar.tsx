import Link from 'next/link';

export default function Navbar() {
    return (
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f2f4] dark:border-b-[#2a3441] bg-white dark:bg-[#1a2633] px-10 py-3 sticky top-0 z-50">
            <div className="flex items-center gap-4 text-[#111418] dark:text-white">
                <div className="size-8 text-primary">
                    <svg className="h-full w-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z" fill="currentColor"></path>
                    </svg>
                </div>
                <h2 className="text-[#111418] dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">AloTho</h2>
            </div>
            <div className="flex flex-1 justify-end gap-8">
                <div className="hidden md:flex items-center gap-9">
                    <Link className="text-[#111418] dark:text-gray-200 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Services</Link>
                    <Link className="text-[#111418] dark:text-gray-200 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">How it Works</Link>
                    <Link className="text-[#111418] dark:text-gray-200 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Login</Link>
                </div>
                <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary hover:bg-blue-600 transition-colors text-white text-sm font-bold leading-normal tracking-[0.015em]">
                    <span className="truncate">Sign Up</span>
                </button>
            </div>
        </header>
    );
}