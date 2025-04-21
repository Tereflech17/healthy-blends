import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `You are a helpful assistant for Healthy Blends, a company that sells premium pine tea. 
          Here are some key details about the company:
          - Product: Premium Pine Tea
          - Price: GH₵50 per bottle
          - Bulk Discount: 10% off for orders above 5 bottles
          - Delivery: Free for orders above GH₵100, GH₵10 within Accra
          - Contact: +233 542 357 318, Instagram @healthyblendsgh
          - Benefits: Weight loss, energy boost, improved metabolism
          - Results: Up to 5kg weight loss in 14 days with regular consumption
          
          Keep responses concise, friendly, and focused on the product information. 
          If asked about topics outside of Healthy Blends, politely redirect the conversation back to the product.`,
        },
        ...messages,
      ],
      temperature: 0.7,
      max_tokens: 150,
    });

    return NextResponse.json({
      message: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error("Error in chat API:", error);
    return NextResponse.json(
      { error: "Failed to process your request" },
      { status: 500 }
    );
  }
}
