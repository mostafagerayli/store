export function getNumber(formData: FormData, key: string) {
  return Number(formData.get(key) ?? 0);
}