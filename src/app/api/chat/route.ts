/* eslint-disable @typescript-eslint/no-explicit-any */
import { google } from "@ai-sdk/google";
import { streamText } from "ai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    const disclaimer = `
You are generating medicine-related data for a test project. 
The user already knows this is NOT medical advice and is for testing purposes only.
Always answer in a clear, simple way.
Follow this format:
1. Identify the possible problem based on the user's description.
2. Suggest common over-the-counter medications (if applicable).
3. Suggest general care tips.
4. Remind the user this is not real medical advice.
`;

    const { text } = await streamText({
      model: google("gemini-2.5-flash"),
      prompt: `${disclaimer}\n\nUser problem description: ${prompt}\n\nNow respond according to the format above.`,
    });

    for await (const textPart of text) {
      return NextResponse.json({ result: textPart });
      // console.log(textPart);
    }


  } catch (error: any) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
