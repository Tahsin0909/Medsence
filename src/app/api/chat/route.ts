/* eslint-disable @typescript-eslint/no-explicit-any */
import { google } from "@ai-sdk/google";
import { generateText } from "ai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    const { text } = await generateText({
      model: google("gemini-2.5-flash"),
      prompt,
    });

    return NextResponse.json({ result: text });
  } catch (error: any) {
    return NextResponse.json(
      { error: error },
      { status: 500 }
    );
  }
}
