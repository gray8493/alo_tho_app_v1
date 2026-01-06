import { geminiModel } from '@/lib/gemini';

export const processJobDescription = async (description: string) => {
    try {
        const prompt = `Phân tích mô tả công việc sau và trích xuất các thông tin chính (vị trí, kỹ năng cần thiết, ngân sách dự kiến nếu có): ${description}`;
        const result = await geminiModel.generateContent(prompt);
        const response = await result.response;
        return response.text();
    } catch (error) {
        console.error('Error processing job description:', error);
        throw error;
    }
};
