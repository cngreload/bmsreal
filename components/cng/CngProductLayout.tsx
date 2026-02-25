import CngStickyRail from "./CngStickyRail";

export default function CngProductLayout ( {
    children,
}: {
    children: React.ReactNode;
} )
{
    return (
        <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="grid grid-cols-1 xl:grid-cols-[220px_1fr] gap-12">
                <CngStickyRail />
                <article className="min-w-0">{ children }</article>
            </div>
        </div>
    );
}
