// app/admin/contact-messages/[id]/page.tsx
import AdminContactMessageClient from "./ContactMessageClient";

export default async function Page ( {
    params,
}: {
    params: Promise<{ id: string; }>;
} )
{
    const { id } = await params;
    return <AdminContactMessageClient id={ id } />;
}
