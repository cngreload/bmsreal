import { BlogPostForm } from "@/components/admin/blog/BlogPostForm";
import { adminListCategories, adminListTags } from "@/lib/server/blog-service";

export const dynamic = "force-dynamic";

export default async function AdminBlogNewPage ()
{
    const [ categories, tags ] = await Promise.all( [
        adminListCategories(),
        adminListTags(),
    ] );

    return <BlogPostForm mode="create" categories={ categories } tags={ tags } />;
}