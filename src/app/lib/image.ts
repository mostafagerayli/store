import sharp from "sharp";

export interface CompressedImage {
  buffer: Buffer;
  width: number;
  height: number;
}

export async function compressToWebp(
  input: Buffer,
  {
    maxWidth = 1600,
    quality = 75,
  }: {
    maxWidth?: number;
    quality?: number;
  } = {}
): Promise<CompressedImage> {
  const image = sharp(input, {
    failOn: "none",
  });

  const metadata = await image.metadata();

  if (!metadata.width || !metadata.height) {
    throw new Error("فایل ارسالی یک تصویر معتبر نیست");
  }

  const sharpBuffer = await image
    .rotate()
    .resize({
      width: maxWidth,
      withoutEnlargement: true,
    })
    .webp({
      quality,
    })
    .toBuffer();

  // جلوگیری از SharedArrayBuffer
  const buffer = Buffer.from(
    Uint8Array.from(sharpBuffer)
  );

  const outputMeta = await sharp(buffer).metadata();

  return {
    buffer,
    width: outputMeta.width ?? metadata.width,
    height: outputMeta.height ?? metadata.height,
  };
}


export function toSafeBuffer(ab: ArrayBuffer): Buffer {
  const copy = new ArrayBuffer(ab.byteLength);

  new Uint8Array(copy).set(
    new Uint8Array(ab)
  );

  return Buffer.from(copy);
}