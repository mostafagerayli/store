import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const started = Date.now();

  const checks = {
    api: {
      status: "up",
    },
    database: {
      status: "down",
    },
  };

  try {
    await prisma.$queryRaw`SELECT 1`;

    checks.database.status = "up";
  } catch (error) {
    console.error("Database Health Check Failed:", error);
  }

  const healthy =
    checks.api.status === "up" &&
    checks.database.status === "up";

  return NextResponse.json(
    {
      status: healthy ? "ok" : "error",
      timestamp: new Date().toISOString(),
      uptime: Math.floor(process.uptime()),
      environment: process.env.NODE_ENV,
      responseTime: `${Date.now() - started}ms`,
      version: process.env.npm_package_version ?? "1.0.0",
      services: checks,
    },
    {
      status: healthy ? 200 : 503,
    }
  );
}