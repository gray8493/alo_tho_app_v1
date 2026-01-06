export default function Features() {
    const steps = [
        {
            icon: "photo_camera",
            title: "1. Chụp hình lỗi",
            desc: "Chụp ảnh rõ nét khu vực gặp sự cố. Bạn không cần biết chính xác đó là lỗi gì, chỉ cần cho chúng tôi xem."
        },
        {
            icon: "smart_toy",
            title: "2. AI Chẩn đoán",
            desc: "AI của chúng tôi ngay lập tức phân tích hình ảnh, xác định sự cố, ước tính chi phí và phân loại công việc.",
            highlight: true
        },
        {
            icon: "handyman",
            title: "3. Thợ đến sửa",
            desc: "Chúng tôi kết nối bạn với những thợ địa phương đã được xác minh, sẵn sàng khắc phục vấn đề của bạn."
        }
    ];

    return (
        <>
            {/* Trusted By Strip */}
            <div className="flex flex-col items-center gap-6 py-10 border-y border-[#f0f2f4] dark:border-[#2a3441] bg-white/50 dark:bg-white/5 backdrop-blur-sm -mx-4 md:-mx-20 px-4 md:px-20 mb-10">
                <p className="text-sm font-semibold text-[#617589] dark:text-gray-400 uppercase tracking-wider">Được tin dùng bởi các chuyên gia từ</p>
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
                    <div className="flex items-center gap-2 text-xl font-bold dark:text-white"><span className="material-symbols-outlined text-3xl">home_repair_service</span> HandyPro</div>
                    <div className="flex items-center gap-2 text-xl font-bold dark:text-white"><span className="material-symbols-outlined text-3xl">build</span> FixItAll</div>
                    <div className="flex items-center gap-2 text-xl font-bold dark:text-white"><span className="material-symbols-outlined text-3xl">engineering</span> MasterWorks</div>
                    <div className="flex items-center gap-2 text-xl font-bold dark:text-white"><span className="material-symbols-outlined text-3xl">bolt</span> VoltSafe</div>
                </div>
            </div>

            <div className="flex flex-col gap-10 py-10">
                <div className="flex flex-col gap-4 text-center items-center">
                    <h2 className="text-[#111418] dark:text-white tracking-tight text-3xl font-bold leading-tight md:text-4xl max-w-[720px]">
                        Cách thức hoạt động
                    </h2>
                    <p className="text-[#617589] dark:text-gray-300 text-base font-normal leading-normal max-w-[720px]">
                        Hoàn thành việc sửa chữa của bạn qua ba bước đơn giản với công nghệ AI tiên tiến.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`flex flex-col gap-4 rounded-xl border p-6 transition-all duration-300 ${step.highlight
                                    ? "border-primary/30 bg-primary/5 dark:bg-primary/10 relative overflow-hidden"
                                    : "border-[#dbe0e6] dark:border-[#2a3441] bg-white dark:bg-[#1a2633] hover:shadow-lg"
                                }`}
                        >
                            {step.highlight && <div className="absolute -right-4 -top-4 bg-primary/10 size-24 rounded-full blur-xl"></div>}
                            <div className={`size-12 rounded-full flex items-center justify-center mb-2 ${step.highlight ? "bg-primary text-white shadow-lg shadow-blue-500/30" : "bg-blue-50 dark:bg-blue-900/20 text-primary"
                                }`}>
                                <span className="material-symbols-outlined text-[28px]">{step.icon}</span>
                            </div>
                            <div className="flex flex-col gap-2 relative z-10">
                                <h3 className="text-[#111418] dark:text-white text-lg font-bold leading-tight">{step.title}</h3>
                                <p className={`${step.highlight ? 'text-[#617589] dark:text-gray-300' : 'text-[#617589] dark:text-gray-400'} text-sm font-normal leading-relaxed`}>
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Rating Summary Section */}
            <div className="w-full bg-[#f8f9fa] dark:bg-[#151f2b] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-10 mt-10">
                <div className="flex flex-col gap-4 max-w-md">
                    <h2 className="text-3xl font-bold text-[#111418] dark:text-white">Yêu thích của khách hàng</h2>
                    <p className="text-[#617589] dark:text-gray-400">Tham gia cùng hàng ngàn chủ nhà đã khắc phục sự cố trong thời gian kỷ lục.</p>
                    <div className="flex items-center gap-4 mt-2">
                        <div className="flex flex-col">
                            <span className="text-4xl font-black text-[#111418] dark:text-white">4.9</span>
                            <div className="flex text-yellow-400">
                                {[1, 2, 3, 4, 5].map(i => (
                                    <span key={i} className="material-symbols-outlined text-[20px] fill-current">{i === 5 ? 'star_half' : 'star'}</span>
                                ))}
                            </div>
                            <span className="text-sm text-[#617589] dark:text-gray-500 mt-1">Dựa trên 12,400+ đánh giá</span>
                        </div>
                    </div>
                </div>
                <div className="flex-1 w-full max-w-md grid grid-cols-[20px_1fr_40px] items-center gap-y-3">
                    {[
                        { label: '5', val: 85 },
                        { label: '4', val: 10 },
                        { label: '3', val: 3 },
                        { label: '2', val: 1 },
                        { label: '1', val: 1 }
                    ].map((r, i) => (
                        <div key={i} className="contents">
                            <p className="text-[#111418] dark:text-gray-200 text-sm font-medium">{r.label}</p>
                            <div className="flex h-2 flex-1 overflow-hidden rounded-full bg-[#dbe0e6] dark:bg-[#2a3441]">
                                <div className="rounded-full bg-primary" style={{ width: `${r.val}%` }}></div>
                            </div>
                            <p className="text-[#617589] dark:text-gray-400 text-sm font-medium text-right">{r.val}%</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
