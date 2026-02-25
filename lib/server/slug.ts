export function makeSlug(input: string) {
  const s = (input ?? "").trim();
  if (!s) return "";

  // حفظ فارسی/یونیکد، تبدیل فاصله به "-"
  return s
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\p{L}\p{N}\-_]+/gu, "") // فقط حرف/عدد/خط تیره/آندرلاین
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}
