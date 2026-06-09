"use client";

import { useEffect, useState } from "react";

interface Post {
    title: string;
    link: string;
    date: string;
    excerpt: string;
}

export function BlogsList() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/blogs")
            .then((r) => r.json())
            .then((data) => {
                setPosts(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

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
        <div className="size-full overflow-y-auto px-5 py-4 space-y-4">
            {posts.map((post) => (
                <a
                    key={post.link}
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block no-drag p-4 rounded-xl border border-neutral-200 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-500 hover:shadow-sm transition-all"
                >
                    <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0 flex-1">
                            <h3 className="text-base font-semibold leading-snug">
                                {post.title}
                            </h3>
                            <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed line-clamp-3">
                                {post.excerpt}
                            </p>
                        </div>
                        <span className="text-[11px] text-muted-foreground whitespace-nowrap shrink-0 mt-0.5">
                            {post.date}
                        </span>
                    </div>
                </a>
            ))}
        </div>
    );
}
