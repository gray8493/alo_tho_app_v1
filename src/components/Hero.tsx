import Image from 'next/image';

export default function Hero() {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center min-h-[500px]">
            {/* Text Content */}
            <div className="flex flex-col gap-6 items-start text-left z-10">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary border border-primary/20">
                    <span className="material-symbols-outlined text-sm">auto_awesome</span>
                    <span>AI-Powered Diagnostics</span>
                </div>
                <h1 className="text-[#111418] dark:text-white text-5xl font-black leading-[1.1] tracking-[-0.033em] lg:text-6xl">
                    Sửa nhà tức thì, <br />
                    <span className="text-primary">Trợ giúp bởi AI</span>
                </h1>
                <h2 className="text-[#617589] dark:text-gray-300 text-lg font-normal leading-relaxed max-w-[540px]">
                    Chụp một bức ảnh. AI của chúng tôi sẽ chẩn đoán lỗi và kết nối bạn với thợ điện, thợ nước, thợ khóa uy tín nhất trong giây lát.
                </h2>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
                    <button className="flex items-center justify-center gap-2 overflow-hidden rounded-lg h-14 px-8 bg-primary hover:bg-blue-600 transition-colors text-white text-base font-bold leading-normal tracking-[0.015em] shadow-lg shadow-blue-500/20">
                        <span className="material-symbols-outlined">add_a_photo</span>
                        <span className="truncate">Đăng việc bằng AI</span>
                    </button>
                    <button className="flex items-center justify-center gap-2 overflow-hidden rounded-lg h-14 px-8 bg-white dark:bg-[#2a3441] border border-[#dbe0e6] dark:border-[#3e4a5b] text-[#111418] dark:text-white hover:bg-gray-50 dark:hover:bg-[#323e4d] transition-colors text-base font-bold leading-normal tracking-[0.015em]">
                        <span className="truncate">Tìm thợ gần đây</span>
                    </button>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#617589] dark:text-gray-400 mt-2">
                    <div className="flex -space-x-2 overflow-hidden">
                        {/* Avatars */}
                        {[1, 2, 3].map(i => (
                            <div key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-[#101922] bg-gray-200 flex items-center justify-center text-[10px] font-bold text-gray-400">
                                U{i}
                            </div>
                        ))}
                    </div>
                    <span>Được tin dùng bởi 12k+ chủ nhà</span>
                </div>
            </div>

            {/* Image/Visual Content */}
            <div className="relative h-full min-h-[400px] w-full flex items-center justify-center lg:justify-end">
                <div className="relative w-full max-w-[500px] aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-[#2a3441]">
                    {/* Background Image representing home repair */}
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=1000&auto=format&fit=crop')` }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                    {/* AI Analysis Overlay UI */}
                    <div className="absolute inset-0 flex flex-col justify-between p-6">
                        <div className="self-end bg-black/60 backdrop-blur-md rounded-lg px-3 py-1.5 text-xs text-white flex items-center gap-1 border border-white/10">
                            <span className="material-symbols-outlined text-green-400 text-sm">check_circle</span>
                            AI Analysis Active
                        </div>

                        {/* Bounding Box Simulation */}
                        <div className="absolute top-[30%] left-[20%] w-[40%] h-[20%] border-2 border-primary rounded-lg shadow-[0_0_15px_rgba(19,127,236,0.5)] flex items-start justify-end p-2 animate-pulse">
                            <div className="bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded ml-2 -mt-4">
                                Leak Detected (98%)
                            </div>
                        </div>

                        {/* Bottom Card */}
                        <div className="bg-white dark:bg-[#1a2633] p-4 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="size-10 rounded-full bg-blue-100 flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined">plumbing</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm text-[#111418] dark:text-white">Rò rỉ ống chữ P</h3>
                                    <p className="text-xs text-[#617589] dark:text-gray-400">Mức độ: Trung bình</p>
                                </div>
                            </div>
                            <div className="h-px bg-gray-100 dark:bg-gray-700 my-2"></div>
                            <div className="flex justify-between items-center">
                                <span className="text-xs font-medium text-[#617589] dark:text-gray-400">Ước tính: 150k - 300k VNĐ</span>
                                <button className="bg-primary/10 text-primary text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-primary/20 transition">Tìm thợ ngay</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
