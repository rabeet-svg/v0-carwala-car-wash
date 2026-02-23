import { NextResponse } from 'next/server';

interface RateLimitResult {
  allowed: boolean;
  response?: NextResponse;
}

export async function applyRateLimit(key: string): Promise<RateLimitResult> {
  if (process.env.NODE_ENV === 'development') {
    return { allowed: true };
  }

  return { allowed: true };
}