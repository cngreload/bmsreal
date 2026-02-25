// lib/validations/contact.ts
import { z } from "zod";

const optionalShortString = z
  .string()
  .max(255, "طول این فیلد بیش از حد مجاز است.")
  .optional()
  .or(z.literal(""));

export const contactMessageSchema = z.object({
  fullName: z
    .string()
    .min(2, "لطفاً نام و نام خانوادگی را کامل وارد کنید.")
    .max(120, "نام وارد شده بیش از حد طولانی است."),
  email: z
    .string()
    .min(1, "وارد کردن ایمیل الزامی است.")
    .email("ایمیل وارد شده معتبر نیست.")
    .max(160, "ایمیل وارد شده بیش از حد طولانی است."),
  phone: optionalShortString,
  organization: optionalShortString,
  subject: z
    .string()
    .min(5, "موضوع پیام را کمی کامل‌تر بنویسید.")
    .max(150, "موضوع پیام بیش از حد طولانی است."),
  // بدون errorMap، ساده و سازگار با نسخه‌های قدیمی‌تر Zod
  type: z.enum(["GENERAL", "SALES", "SUPPORT", "INVESTMENT"]),
  message: z
    .string()
    .min(20, "متن پیام را کمی مفصل‌تر بنویسید (حداقل ۲۰ کاراکتر).")
    .max(4000, "متن پیام بیش از حد طولانی است."),
  // اینجا از boolean + refine استفاده می‌کنیم تا نوعش boolean بماند
  consent: z
    .boolean()
    .refine(val => val === true, {
      message: "برای ارسال فرم، لازم است با تماس تیم بارمان موافقت کنید."
    }),
  // Honeypot
  companyWebsite: z.string().optional().or(z.literal(""))
});

export type ContactMessageInput = z.infer<typeof contactMessageSchema>;
