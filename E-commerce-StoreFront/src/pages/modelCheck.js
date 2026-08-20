import { GoogleGenAI } from '@google/genai';

// APNI API KEY YAHA'N ENTER KAREIN
const apiKey = { apiKey: import.meta.env.VITE_GEMINI_API_KEY }



const ai = new GoogleGenAI({ apiKey });

async function checkModels() {
  try {
    const response = await ai.models.list();
    
    console.log('--- AVAILABLE MODELS ---');
    for await (const model of response) {
      console.log(`- ${model.name}`);
    }
  } catch (error) {
    console.error('Error fetching models:', error.message);
  }
}

checkModels();