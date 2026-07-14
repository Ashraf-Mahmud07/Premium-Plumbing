import { NextResponse } from "next/server";

/**
 * Contact/request-service form stub.
 * TODO: connect a real backend here — e.g. forward to an email service
 * (Resend/SendGrid), a CRM webhook, or the dispatch system. The payload shape is:
 * { name, phone, address, method: "Call" | "Text" | "Email", message, source: "home" | "contact" }
 */
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  console.log("[/api/contact] request received:", body);
  return NextResponse.json({ ok: true }, { status: 200 });
}
