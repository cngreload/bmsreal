// lib/server/http.ts
import { NextResponse } from "next/server";

export class HttpError extends Error {
  constructor(
    public status: number,
    message: string,
    public code?: string,
    public details?: unknown
  ) {
    super(message);
  }
}

export function jsonOk(data: unknown, status = 200) {
  return NextResponse.json(data, { status });
}

export function jsonError(err: unknown) {
  if (err instanceof HttpError) {
    return NextResponse.json(
      { error: err.code ?? "ERROR", message: err.message, details: err.details ?? null },
      { status: err.status }
    );
  }
  console.error("Unhandled Error:", err);
  return NextResponse.json(
    { error: "INTERNAL_SERVER_ERROR", message: "An unexpected error occurred" },
    { status: 500 }
  );
}

// Utility to parse errors on the client side consistently
export function getErrorMessage(err: unknown): string {
  if (err instanceof Error) return err.message;
  if (typeof err === "string") return err;
  return "خطای ناشناخته رخ داد";
}

export function parsePagination(sp: URLSearchParams) {
  const page = Math.max(1, Number(sp.get("page")) || 1);
  const pageSize = Math.min(50, Math.max(1, Number(sp.get("pageSize")) || 10));
  return { page, pageSize, skip: (page - 1) * pageSize, take: pageSize };
}