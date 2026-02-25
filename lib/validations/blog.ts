import { z } from "zod";

export const blogPostSchema = z.object({
  title: z
    .string()
    .min(3, "عنوان باید حداقل ۳ کاراکتر باشد")
    .max(255, "عنوان نمی‌تواند بیشتر از ۲۵۵ کاراکتر باشد"),
  slug: z
    .string()
    .min(3, "نامک باید حداقل ۳ کاراکتر باشد")
    .regex(/^[a-z0-9-]+$/, "نامک فقط می‌تواند شامل حروف کوچک انگلیسی، اعداد و خط تیره باشد")
    .optional()
    .or(z.literal("")),
  excerpt: z
    .string()
    .max(300, "خلاصه نمی‌تواند بیشتر از ۳۰۰ کاراکتر باشد")
    .optional()
    .nullable(),
  content: z.string().min(1, "متن مقاله نمی‌تواند خالی باشد"),
  coverImageUrl: z.string().url("آدرس تصویر معتبر نیست").optional().or(z.literal("")),
  status: z.enum(["DRAFT", "PUBLISHED", "ARCHIVED"]),
  categoryId: z.string().min(1, "انتخاب دسته‌بندی الزامی است").nullable(),
  
  // Changed: Removed .default([]), made it strictly an array
  tagIds: z.array(z.string()),
  
  // SEO
  seoTitle: z.string().max(70, "عنوان SEO نباید بیشتر از ۷۰ کاراکتر باشد").optional().nullable(),
  seoDesc: z.string().max(160, "توضیحات SEO نباید بیشتر از ۱۶۰ کاراکتر باشد").optional().nullable(),
  
  // Changed: Removed .default(false), made it strictly boolean
  isFeatured: z.boolean(),
});

export type BlogPostInput = z.infer<typeof blogPostSchema>;