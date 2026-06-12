"use client";

import { useEffect, useState } from "react";

interface Post {
    title: string;
    link: string;
    date: string;
    excerpt: string;
    source: string;
}

const filters = ["All", "Substack", "Dev.to"] as const;
type Filter = (typeof filters)[number];

const sourceColours: Record<string, string> = {
    Substack: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
    "Dev.to": "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300",
};

export function BlogsList() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeFilter, setActiveFilter] = useState<Filter>("All");

    useEffect(() => {
        fetch("/api/blogs")
            .then((r) => r.json())
            .then((data) => {
                setPosts(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    const filtered = activeFilter === "All"
        ? posts
        : posts.filter((p) => p.source === activeFilter);

    if (loading) {
        return (
            <div className="size-full flex items-center justify-center text-sm text-muted-foreground">
                Loading posts...
            </div>
        );
    }

    if (posts.length === 0) {
        return (
            <div className="size-full flex items-center justify-center text-sm text-muted-foreground">
                No posts yet
            </div>
        );
    }

    return (
        <div className="size-full flex flex-col">
            <div className="shrink-0 flex items-center gap-2 px-5 pt-4 pb-2">
                {filters.map((f) => (
                    <button
                        key={f}
                        onClick={() => setActiveFilter(f)}
                        className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                            activeFilter === f
                                ? "bg-white dark:bg-muted shadow-sm"
                                : "text-muted-foreground hover:text-foreground"
                        }`}
                    >
                        {f}
                    </button>
                ))}
            </div>
            <div className="flex-1 overflow-y-auto px-5 pb-4 space-y-3">
                {filtered.length === 0 ? (
                    <div className="flex items-center justify-center h-24 text-sm text-muted-foreground">
                        No {activeFilter} posts
                    </div>
                ) : (
                    filtered.map((post) => (
                        <a
                            key={post.link}
                            href={post.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block no-drag p-4 rounded-xl border border-neutral-200 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-500 hover:shadow-sm transition-all"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div className="min-w-0 flex-1">
                                    <div className="flex items-center gap-2">
                                        <h3 className="text-base font-semibold leading-snug">
                                            {post.title}
                                        </h3>
                                        <span
                                            className={`shrink-0 text-[10px] font-medium px-1.5 py-0.5 rounded-full ${sourceColours[post.source] ?? ""}`}
                                        >
                                            {post.source}
                                        </span>
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                </div>
                                <span className="text-[11px] text-muted-foreground whitespace-nowrap shrink-0 mt-0.5">
                                    {post.date}
                                </span>
                            </div>
                        </a>
                    ))
                )}
            </div>
        </div>
    );
}
