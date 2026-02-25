import { redirect } from "next/navigation";

export default async function AdminContactIdRedirect ( {
    params,
}: {
    params: Promise<{ id: string; }>;
} )
{
    const { id } = await params;
    redirect( `/admin/contact-messages/${ id }` );
}
