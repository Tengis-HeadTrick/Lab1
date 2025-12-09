import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (body.action !== "edituser") {
      return NextResponse.json({
        resultCode: 9999,
        resultMessage: "Invalid action",
      });
    }

    // энд яг services.pdf шиг хиймэл API response буцаана
    return NextResponse.json({
      resultCode: 8720,
      resultMessage: "Хэрэглэгчийн мэдээллийг амжилттай заслаа.",
      data: [
        {
          user_id: body.user_id,
          first_name: body.first_name,
          last_name: body.last_name,
        },
      ],
    });
  } catch (e) {
    return NextResponse.json(
      { resultCode: 5000, resultMessage: "Server error" },
      { status: 500 }
    );
  }
}
