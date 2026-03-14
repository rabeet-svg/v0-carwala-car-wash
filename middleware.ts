import { NextResponse, type NextRequest } from "next/server"
import { get } from "@vercel/edge-config"

// Paths to exclude from maintenance mode check
const EXCLUDED_PATHS = [
  "/api",
  "/_next/static",
  "/_next/image",
  "/favicon.ico",
  "/maintenance",
]

// Check if a path should be excluded from maintenance mode
function isExcludedPath(pathname: string): boolean {
  return EXCLUDED_PATHS.some((excluded) => pathname.startsWith(excluded))
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip maintenance check for excluded paths
  if (isExcludedPath(pathname)) {
    return NextResponse.next()
  }

  try {
    // Check maintenance mode from Edge Config
    const isInMaintenanceMode = await get<boolean>("isInMaintenanceMode")

    if (isInMaintenanceMode === true) {
      // Rewrite to maintenance page
      const maintenanceUrl = new URL("/maintenance", request.url)
      return NextResponse.rewrite(maintenanceUrl)
    }
  } catch (error) {
    // Log error in production (Edge Config might not be configured)
    console.error("Edge Config error:", error instanceof Error ? error.message : "Unknown error")
    // Fail open - allow request to proceed if Edge Config fails
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}
