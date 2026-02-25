import { jsonError, jsonOk } from "@/lib/server/http";
import { createContactMessage } from "@/lib/server/contact-service";
import { contactMessageSchema } from "@/lib/validations/contact";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // 1. Validate Input
    const parseResult = contactMessageSchema.safeParse(body);
    if (!parseResult.success) {
      return jsonError({
        status: 400,
        message: "اطلاعات وارد شده معتبر نیست",
        details: parseResult.error.flatten()
      });
    }

    // 2. Save to Database
    const message = await createContactMessage(parseResult.data);

    // 3. (Optional) TODO: Send Email Notification via Resend/Nodemailer
    // await sendNotificationEmail(message);

    return jsonOk({ success: true, id: message.id }, 201);
  } catch (err) {
    return jsonError(err);
  }
}