"use client";

import { useEffect, useState } from "react";
import { spaceGrotesk } from "@/app/fonts";

function polarToCartesian(
    cx: number,
    cy: number,
    r: number,
    deg: number,
) {
    const rad = ((deg - 90) * Math.PI) / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function Hand({
    length,
    angle,
    width,
    color,
    className,
}: {
    length: number;
    angle: number;
    width: number;
    color: string;
    className?: string;
}) {
    const end = polarToCartesian(50, 50, length, angle);
    return (
        <line
            x1={50}
            y1={50}
            x2={end.x}
            y2={end.y}
            stroke={color}
            strokeWidth={width}
            strokeLinecap="round"
            className={className}
        />
    );
}

export function Status() {
    const [now, setNow] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => setNow(new Date()), 1000);
        return () => clearInterval(interval);
    }, []);

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourDeg = (hours % 12) * 30 + minutes * 0.5;
    const minuteDeg = minutes * 6 + seconds * 0.1;
    const secondDeg = seconds * 6;

    const hh = hours.toString().padStart(2, "0");
    const mm = minutes.toString().padStart(2, "0");

    return (
        <div className="size-full flex flex-col items-center justify-center gap-1.5 px-3 py-2">
            <svg viewBox="0 0 100 100" className="size-20">
                <circle
                    cx={50}
                    cy={50}
                    r={46}
                    fill="none"
                    className="stroke-neutral-300 dark:stroke-neutral-600"
                    strokeWidth={1.5}
                />

                {Array.from({ length: 12 }, (_, i) => {
                    const tick = polarToCartesian(50, 50, 44, i * 30);
                    const inner = polarToCartesian(50, 50, 40, i * 30);
                    return (
                        <line
                            key={i}
                            x1={tick.x}
                            y1={tick.y}
                            x2={inner.x}
                            y2={inner.y}
                            className="stroke-neutral-400 dark:stroke-neutral-500"
                            strokeWidth={i % 3 === 0 ? 2 : 1}
                        />
                    );
                })}

                <Hand
                    length={22}
                    angle={hourDeg}
                    width={3}
                    color="currentColor"
                />
                <Hand
                    length={32}
                    angle={minuteDeg}
                    width={2}
                    color="currentColor"
                />
                <Hand
                    length={36}
                    angle={secondDeg}
                    width={1}
                    className="stroke-red-500"
                    color="#ef4444"
                />

                <circle
                    cx={50}
                    cy={50}
                    r={2.5}
                    className="fill-red-500"
                />
            </svg>

            <div className={`${spaceGrotesk.className} text-2xl sm:text-3xl font-bold tabular-nums tracking-wider leading-none`}>
                {hh}:{mm}
            </div>
        </div>
    );
}
