import { notFound } from "next/navigation";
import { BlogPostForm } from "@/components/admin/blog/BlogPostForm";
import { adminGetPost, adminListCategories, adminListTags } from "@/lib/server/blog-service";

export const dynamic = "force-dynamic";

type AdminBlogEditParams = {
    id?: string;
};

export default async function AdminBlogEditPage ( {
    params,
}: {
    params: Promise<AdminBlogEditParams>;
} )
{
    const p = await params;
    const id = p.id;

    if ( !id )
    {
        notFound();
    }

    try
    {
        // 1. Fetch all data in parallel
        const [ postData, categories, tags ] = await Promise.all( [
            adminGetPost( id ),
            adminListCategories(),
            adminListTags(),
        ] );

        // 2. Format data for the form
        const initialData = {
            title: postData.title,
            slug: postData.slug,
            excerpt: postData.excerpt ?? "",
            content: postData.content,
            coverImageUrl: postData.coverImageUrl ?? "",
            status: postData.status,
            categoryId: postData.categoryId,
            tagIds: postData.tagIds,
            seoTitle: postData.seoTitle ?? "",
            seoDesc: postData.seoDesc ?? "",
            isFeatured: postData.isFeatured,
        };

        // 3. Render Form with data
        return (
            <BlogPostForm
                mode="edit"
                postId={ id }
                initialData={ initialData }
                categories={ categories }
                tags={ tags }
            />
        );
    } catch
    {
        // اگر پست پیدا نشد یا خطایی رخ داد → 404
        notFound();
    }
}