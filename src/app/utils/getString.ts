export function getString(formData: FormData, key: string) {
  return String(formData.get(key) ?? "").trim();
}