import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log("Quote request received:", body);

    return NextResponse.json({
      success: true,
      message: "Quote request received",
    });
  } catch (error) {
    console.error("Error processing quote request:", error);
    return NextResponse.json(
      { success: false, message: "Invalid request" },
      { status: 400 }
    );
  }
}
