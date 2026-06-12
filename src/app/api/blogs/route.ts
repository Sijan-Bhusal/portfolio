import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
    try {
        const [substackRes, devtoRes] = await Promise.all([
            fetch("https://sijanvusal.substack.com/feed"),
            fetch("https://dev.to/api/articles?username=sijanvusal&per_page=20"),
        ]);

        const substackXml = await substackRes.text();
        const devtoData = await devtoRes.json();

        const substackItems = substackXml.match(/<item>[\s\S]*?<\/item>/g) || [];
        const substackPosts = substackItems.map((item) => {
            const title = item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/)?.[1] ?? "";
            const link = item.match(/<link>(.*?)<\/link>/)?.[1] ?? "";
            const desc = item.match(/<description><!\[CDATA\[(.*?)\]\]><\/description>/)?.[1] ?? "";
            const pubDate = item.match(/<pubDate>(.*?)<\/pubDate>/)?.[1] ?? "";

            const excerpt = desc.replace(/<[^>]*>/g, "").trim().substring(0, 300);

            return { title, link, excerpt, pubDate: new Date(pubDate), source: "Substack" as const };
        });

        const devtoPosts = (devtoData as any[]).map((article) => ({
            title: article.title ?? "",
            link: article.url ?? "",
            excerpt: (article.description ?? "").substring(0, 300),
            pubDate: new Date(article.published_at),
            source: "Dev.to" as const,
        }));

        const allPosts = [...substackPosts, ...devtoPosts]
            .sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime())
            .slice(0, 30)
            .map((post) => ({
                title: post.title,
                link: post.link,
                excerpt: post.excerpt,
                date: post.pubDate.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                }),
                source: post.source,
            }));

        return NextResponse.json(allPosts);
    } catch {
        return NextResponse.json([]);
    }
}
