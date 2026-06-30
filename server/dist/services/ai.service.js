"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AIService = void 0;
const genai_1 = require("@google/genai");
const ai = process.env.GEMINI_API_KEY
    ? new genai_1.GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY })
    : null;
function fallbackTask(input) {
    const minutes = input.match(/(\d+)\s*(min|mins|minutes|hour|hours|hr|hrs)/i);
    const value = minutes ? Number(minutes[1]) : 30;
    const estimatedMinutes = minutes?.[2]?.toLowerCase().startsWith('h') ? value * 60 : value;
    const priority = /urgent|critical|asap|important|high/i.test(input) ? 'high' : 'medium';
    return { title: input.replace(/\s+in\s+\d+.*$/i, '').trim(), estimatedMinutes, priority };
}
exports.AIService = {
    /**
     * Parse a natural language input into a structured Task object.
     */
    async parseTask(input) {
        if (!ai) {
            return fallbackTask(input);
        }
        const prompt = `
      You are an AI assistant that parses natural language into structured task data.
      User input: "${input}"
      
      Extract the task title, estimated time in minutes (default to 30 if not specified), 
      and priority (low, medium, high). 
      Return a JSON object: { "title": "string", "timeEstimate": number, "priority": "low" | "medium" | "high" }
    `;
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                responseMimeType: 'application/json',
            }
        });
        try {
            return JSON.parse(response.text || '{}');
        }
        catch (e) {
            console.error("Failed to parse Gemini response", e);
            return fallbackTask(input);
        }
    },
    /**
     * Decompose a goal into a day-by-day plan with specific tasks.
     */
    async decomposeGoal(goalTitle, goalDescription, days) {
        if (!ai) {
            return Array.from({ length: Math.max(1, Math.min(days, 7)) }, (_, index) => ({
                title: `${goalTitle}: step ${index + 1}`,
                description: goalDescription || `Make measurable progress on ${goalTitle}.`,
                dayOffset: index,
                timeEstimate: 45,
            }));
        }
        const prompt = `
      You are a productivity expert. Break down the following goal into a ${days}-day plan.
      Goal: ${goalTitle}
      Description: ${goalDescription}
      
      Return a JSON array of objects, where each object represents a task. 
      Each task must have:
      - title (string)
      - description (string)
      - dayOffset (number from 0 to ${days - 1}, indicating which day it should be done)
      - timeEstimate (number in minutes)
      
      Output exactly a JSON array.
    `;
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                responseMimeType: 'application/json',
            }
        });
        try {
            return JSON.parse(response.text || '[]');
        }
        catch (e) {
            console.error("Failed to parse Gemini response for goal decomposition", e);
            return [];
        }
    },
    /**
     * Evening Check-in Coach Response
     */
    async generateCoachResponse(completedTasks, totalTasks, reflection) {
        if (!ai) {
            const pct = totalTasks === 0 ? 100 : Math.round((completedTasks / totalTasks) * 100);
            return `You completed ${completedTasks} of ${totalTasks} planned tasks (${pct}%). ${reflection ? 'Your reflection gives us useful signal for tomorrow.' : 'Take the signal, reset, and choose one clear priority for tomorrow.'}`;
        }
        const prompt = `
      You are an empathetic yet firm AI accountability coach.
      Today, the user completed ${completedTasks} out of ${totalTasks} tasks.
      User reflection: "${reflection}"
      
      Provide a short, motivating response (max 3 sentences) that acknowledges their progress, 
      addresses any obstacles in their reflection, and sets a positive tone for tomorrow.
    `;
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
        });
        return response.text || "Keep pushing forward! You've got this.";
    }
};
