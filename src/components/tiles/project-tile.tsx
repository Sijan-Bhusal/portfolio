"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Arrow } from "../arrow";
import { Tooltip } from "../tooltip";
import { cn } from "@/lib/utils";

interface ProjectTileProps {
    src: string;
    alt: string;
    href: string;
    label: string;
    imageWidth: number;
    imageHeight: number;
}

export function ProjectTile({
    src,
    alt,
    href,
    label,
    imageWidth,
    imageHeight,
}: ProjectTileProps) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="group relative flex size-full items-center
                justify-center"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Image
                src={src}
                alt={alt}
                width={imageWidth}
                height={imageHeight}
                className="absolute top-0 left-0 size-full object-cover
                    transition-transform duration-800 group-hover:scale-105"
            />
            <Tooltip hovered={hovered} href={href} target="_blank">
                <motion.p
                    initial={false}
                    animate={
                        hovered ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }
                    }
                    transition={
                        hovered
                            ? { delay: 0.3, duration: 0.3 }
                            : { delay: 0, duration: 0.3 }
                    }
                    className="mr-8 ml-4 text-sm whitespace-nowrap"
                >
                    {label}
                </motion.p>
                <div
                    className={cn(
                        `absolute right-0 flex size-9 items-center
                        justify-center`
                    )}
                >
                    <Arrow />
                </div>
            </Tooltip>
        </div>
    );
}
