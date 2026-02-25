// lib/server/contact-service.ts
import "server-only";
import { prisma } from "@/lib/prisma";
import { HttpError } from "@/lib/server/http";
import { contactMessageSchema } from "@/lib/validations/contact";
import { Prisma, ContactMessageStatus, ContactType } from "@prisma/client";

/**
 * Interface for Admin Listing Arguments
 */
export interface ListContactMessagesArgs {
  page: number;
  pageSize: number;
  skip: number;
  take: number;
  status?: string | null;
}

/* -------------------- Public API -------------------- */

/**
 * Creates a contact message from the public form.
 * Uses Zod for strict validation.
 */
export async function createContactMessage(body: unknown) {
  const result = contactMessageSchema.safeParse(body);
  
  if (!result.success) {
    throw new HttpError(
      400, 
      "اطلاعات وارد شده معتبر نیست", 
      "VALIDATION_ERROR", 
      result.error.format()
    );
  }

  const { fullName, email, phone, subject, message } = result.data;

  return await prisma.contactMessage.create({
    data: {
      fullName,
      email,
      phone: phone || null,
      subject,
      message,
      contactType: ContactType.GENERAL, // Defaulting for simple web form
    },
  });
}

/* -------------------- Admin API -------------------- */

/**
 * Lists contact messages for the admin panel with pagination.
 */
export async function adminListContactMessages(args: ListContactMessagesArgs) {
  const where: Prisma.ContactMessageWhereInput = {};
  
  if (args.status) {
    where.status = args.status as ContactMessageStatus;
  }

  const [totalItems, items] = await Promise.all([
    prisma.contactMessage.count({ where }),
    prisma.contactMessage.findMany({
      where,
      skip: args.skip,
      take: args.take,
      orderBy: { createdAt: "desc" },
    }),
  ]);

  return {
    items,
    page: args.page,
    pageSize: args.pageSize,
    totalItems,
    totalPages: Math.ceil(totalItems / args.pageSize),
  };
}

/**
 * Fetches a single message details.
 */
export async function adminGetContactMessage(id: string) {
  const message = await prisma.contactMessage.findUnique({
    where: { id },
  });

  if (!message) {
    throw new HttpError(404, "پیام یافت نشد", "NOT_FOUND");
  }

  return message;
}

/**
 * Updates message status (READ, ARCHIVED, etc.)
 */
export async function adminUpdateContactMessage(id: string, data: { status: string }) {
  return await prisma.contactMessage.update({
    where: { id },
    data: {
      status: data.status as ContactMessageStatus,
    },
  });
}