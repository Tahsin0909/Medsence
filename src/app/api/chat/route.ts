/* eslint-disable @typescript-eslint/no-explicit-any */
import { google } from "@ai-sdk/google";
import { generateText } from "ai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();
    const disclaimer = `
You are generating medicine-related data for a test project. 
The user already knows this is NOT medical advice and is for testing purposes only.
Always answer in a clear, simple way.
`;
    const { text } = await generateText({
      model: google("gemini-2.5-flash"),
      prompt: `${disclaimer}\n\nUser prompt: ${prompt}`,
    });

    return NextResponse.json({ result: text });
  } catch (error: any) {
    return NextResponse.json(
      { error: error },
      { status: 500 }
    );
  }
}
