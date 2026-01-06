export default function Footer() {
    return (
        <footer className="flex flex-col gap-6 px-5 py-10 text-center border-t border-[#f0f2f4] dark:border-[#2a3441] bg-white dark:bg-[#1a2633]">
            <div className="flex flex-wrap items-center justify-center gap-6">
                <a className="text-[#617589] dark:text-gray-400 hover:text-primary transition-colors text-base font-normal leading-normal min-w-40" href="#">Chính sách bảo mật</a>
                <a className="text-[#617589] dark:text-gray-400 hover:text-primary transition-colors text-base font-normal leading-normal min-w-40" href="#">Điều khoản dịch vụ</a>
                <a className="text-[#617589] dark:text-gray-400 hover:text-primary transition-colors text-base font-normal leading-normal min-w-40" href="#">Hỗ trợ</a>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
                <a className="text-[#617589] dark:text-gray-400 hover:text-primary transition-colors" href="#">
                    <span className="material-symbols-outlined text-2xl">public</span>
                </a>
                <a className="text-[#617589] dark:text-gray-400 hover:text-primary transition-colors" href="#">
                    <span className="material-symbols-outlined text-2xl">chat_bubble</span>
                </a>
                <a className="text-[#617589] dark:text-gray-400 hover:text-primary transition-colors" href="#">
                    <span className="material-symbols-outlined text-2xl">mail</span>
                </a>
            </div>
            <p className="text-[#617589] dark:text-gray-500 text-sm font-normal leading-normal">© 2024 AloTho Platform. All rights reserved.</p>
        </footer>
    );
}
