import { openai } from '@ai-sdk/openai';
import { streamText, generateText } from 'ai';
import { NextResponse } from 'next/server';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages, agentType } = await req.json();

    // The system prompt changes based on the configured agent type
    let systemPrompt = "You are a helpful AI assistant for a premium SaaS platform.";
    
    if (agentType === "LEAD_GEN") {
      systemPrompt = "You are an expert Lead Generation specialist. Your goal is to qualify the user, gather their email and company details, and suggest growth strategies.";
    } else if (agentType === "SALES") {
      systemPrompt = "You are a master Closer and Sales Representative. You handle objections smoothly and drive the user towards booking a demo or purchasing a subscription.";
    }

    // Mock Mode Fallback if no API Key provided
    if (!process.env.OPENAI_API_KEY) {
      const mockResult = agentType === "LEAD_GEN" 
        ? "Hey there! Thanks for dropping by. I noticed you're looking for ways to scale your outreach. We usually help agencies generate an extra 20-30 qualified leads per month automatically using this exact AI flow. What industry are your best clients in?"
        : "Welcome back! I'm ready to handle any incoming sales conversations today. The pipeline looks clear, but if anyone drops an objection pricing, I'll gracefully walk them down to our Pro tier to retain the deal. Ready when you are!";
      
      const stream = new ReadableStream({
        async start(controller) {
          const encoder = new TextEncoder();
          const words = mockResult.split(" ");
          for (const word of words) {
            controller.enqueue(encoder.encode(word + " "));
            // Simulate AI typing delay (30-60ms per word)
            await new Promise(resolve => setTimeout(resolve, 50));
          }
          controller.close();
        },
      });
      return new Response(stream, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
    }

    const result = streamText({
      model: openai('gpt-4-turbo'),
      system: systemPrompt,
      messages,
    });

    return result.toTextStreamResponse();
  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json(
      { error: "Failed to process chat request." },
      { status: 500 }
    );
  }
}
