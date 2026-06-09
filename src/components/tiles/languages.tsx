"use client";

import { useEffect, useRef, useState } from "react";
import { moranga } from "@/app/fonts";

const SKILL_ICONS_URL = "https://skillicons.dev/icons?i=";

const languages = "dart,javascript,typescript,cplusplus,csharp,lua,bash";
const frameworks =
    "flutter,react,dotnet,nodejs,godot,postgresql,docker,figma";

export function Languages() {
    const ref = useRef<HTMLDivElement>(null);
    const [perline, setPerline] = useState(4);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new ResizeObserver(([entry]) => {
            const w = entry.contentRect.width;
            setPerline(w < 200 ? 5 : 4);
        });
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className="size-full flex flex-col md:flex-row gap-2 sm:gap-4 px-4 py-3 sm:px-8 sm:py-6">
            <div className="flex-1 min-w-0">
                <h3
                    className={`${moranga.className} text-xs sm:text-lg font-bold mb-1 sm:mb-2`}
                >
                    Languages
                </h3>
                <img
                    src={`${SKILL_ICONS_URL}${languages}&perline=${perline}`}
                    alt="Languages"
                    className="w-full h-auto max-h-[60px] sm:max-h-none"
                />
            </div>
            <div className="flex-1 min-w-0">
                <h3
                    className={`${moranga.className} text-xs sm:text-lg font-bold mb-1 sm:mb-2`}
                >
                    Frameworks
                </h3>
                <img
                    src={`${SKILL_ICONS_URL}${frameworks}&perline=${perline}&theme=dark`}
                    alt="Frameworks"
                    className="w-full h-auto max-h-[60px] sm:max-h-none"
                />
            </div>
        </div>
    );
}
