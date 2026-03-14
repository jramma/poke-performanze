import { gameService } from "@lib/game-engine/service";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const userId = body?.userId;
    const sessionId = body?.sessionId;

    if (!userId || typeof userId !== "string") {
      return NextResponse.json(
        { error: "userId requerido" },
        { status: 400 }
      );
    }

    const result = await gameService.processAttempt(userId, sessionId);

    return NextResponse.json(result, {
      headers: {
        "Cache-Control": "no-store, max-age=0",
      },
    });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Error while processing the capture";
    if (message === "User not found") {
      return NextResponse.json({ error: message }, { status: 401 });
    }
    if (message === "No active game") {
      return NextResponse.json({ error: message }, { status: 400 });
    }
    return NextResponse.json(
      { error: message || "Internal error" },
      { status: 500 }
    );
  }
}
