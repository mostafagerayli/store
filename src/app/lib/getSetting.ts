import { prisma } from "@/app/lib/prisma";

export async function getSetting(key: string) {
  const setting = await prisma.settings.findUnique({
    where: {
      key,
    },
  });

  return setting?.value ?? null;
}