import { NextRequest, NextResponse } from "next/server";
import { scanSearchParams } from "@/lib/security/sqlguard";

export function middleware(req: NextRequest) {
  // Only inspect if query parameters exist
  if (req.nextUrl.searchParams.size > 0) {
    const outcome = scanSearchParams(req.nextUrl.searchParams);
    if (outcome.blocked) {
      return new NextResponse(
        JSON.stringify({
          error: "Forbidden",
          message: `Blocked by SQLGuardJS: Malicious ${outcome.result.label.toUpperCase()} detected`,
          threat: outcome.result.label,
          parameter: outcome.offendingKey,
        }),
        {
          status: 403,
          headers: {
            "Content-Type": "application/json",
            "X-Security-Protection": "SQLGuardJS",
          },
        }
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for static files, _next, favicon.ico, images
     */
    "/((?!_next/static|_next/image|favicon.ico|images/).*)",
  ],
};
