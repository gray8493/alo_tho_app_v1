import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY || '';

if (!apiKey) {
    console.warn('Gemini API key is missing. Please check your environment variables.');
}

const genAI = new GoogleGenerativeAI(apiKey);

export const geminiModel = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

export default genAI;
