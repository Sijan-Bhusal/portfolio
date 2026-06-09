import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
    try {
        const res = await fetch("https://sijanvusal.substack.com/feed");
        const xml = await res.text();

        const items = xml.match(/<item>[\s\S]*?<\/item>/g) || [];
        const posts = items.slice(0, 20).map((item) => {
            const title =
                item.match(
                    /<title><!\[CDATA\[(.*?)\]\]><\/title>/,
                )?.[1] ?? "";
            const link =
                item.match(/<link>(.*?)<\/link>/)?.[1] ?? "";
            const desc =
                item.match(
                    /<description><!\[CDATA\[(.*?)\]\]><\/description>/,
                )?.[1] ?? "";
            const pubDate =
                item.match(/<pubDate>(.*?)<\/pubDate>/)?.[1] ?? "";

            const excerpt = desc
                .replace(/<[^>]*>/g, "")
                .trim()
                .substring(0, 300);

            const date = new Date(pubDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
            });

            return { title, link, date, excerpt };
        });

        return NextResponse.json(posts);
    } catch {
        return NextResponse.json([]);
    }
}
