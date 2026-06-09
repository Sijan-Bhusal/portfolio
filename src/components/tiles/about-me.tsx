"use client";

import Image from "next/image";
import { moranga } from "@/app/fonts";
import { ThemeToggle } from "./theme-toggle";

export function AboutMe() {
    return (
        <div
            className="px-8 py-6 sm:px-10 sm:py-8 size-full flex flex-col
                items-start justify-end overflow-hidden gap-6"
        >
            <div
                className="flex justify-between items-center
                    pointer-events-none"
            >
                <Image
                    src="/images/cat-profile.jpeg"
                    alt="Sijan"
                    className="max-h-32 size-[50px] sm:size-[100px] rounded-full
                        object-cover"
                    width={100}
                    height={100}
                />
            </div>
            <p className="leading-6 sm:leading-6.5 text-[13px] sm:text-sm">
                I&apos;m{" "}
                <span className={`${moranga.className} font-bold text-3xl`}>
                    Sijan
                </span>
                , a passionate Computer Science student pursuing BSc CSIT at
                Tribhuvan University. I enjoy building projects with Flutter,
                React, and web technologies. Currently learning app development
                and solving problems on LeetCode.
            </p>
            <div className="absolute top-5 right-5">
                <ThemeToggle
                    wrapperClassName="no-drag"
                    trackClassName="w-14 h-7 flex items-center rounded-[30px] relative bg-[#f0f2f8] dark:bg-muted dark:shadow-[inset_0_0_0_2px_rgb(48,54,61)] cursor-pointer"
                    knobClassName="size-6 rounded-[30px] flex items-center justify-center bg-[#0d1117]"
                    lightIconWidth={13}
                    lightIconHeight={15}
                    darkIconWidth={18}
                    darkIconHeight={18}
                    lightX={4}
                    darkX={26}
                    lightIcon={
                        <path
                            d="M36.7,18.974a9.469,9.469,0,0,0,7.369-3.513.445.445,0,0,0-.428-.717A7.432,7.432,0,0,1,38.571.982a.445.445,0,0,0-.139-.824A9.488,9.488,0,1,0,36.7,18.974Z"
                            transform="translate(-27.211)"
                            fill="#ffe3a4"
                        />
                    }
                    darkIcon={
                        <path
                            d="M12,0a.945.945,0,0,0-1,1V2a1,1,0,0,0,2,0V1A.945.945,0,0,0,12,0ZM4.2,3.2a.986.986,0,0,0-.7.3.967.967,0,0,0,0,1.4l.7.7A.99.99,0,0,0,5.6,4.2l-.7-.7A.991.991,0,0,0,4.2,3.2Zm15.6,0a.991.991,0,0,0-.7.3l-.7.7a.99.99,0,0,0,1.4,1.4l.7-.7a.967.967,0,0,0,0-1.4A.986.986,0,0,0,19.8,3.2ZM12,5a7,7,0,1,0,7,7,7,7,0,0,0-7-7ZM1,11a1,1,0,0,0,0,2H2a1,1,0,0,0,0-2Zm21,0a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2ZM4.9,18.1a.991.991,0,0,0-.7.3l-.7.7a.99.99,0,0,0,1.4,1.4l.7-.7a.967.967,0,0,0,0-1.4A.986.986,0,0,0,4.9,18.1Zm14.2,0a.986.986,0,0,0-.7.3.967.967,0,0,0,0,1.4l.7.7a.99.99,0,0,0,1.4-1.4l-.7-.7A.991.991,0,0,0,19.1,18.1ZM12,21a.945.945,0,0,0-1,1v1a1,1,0,0,0,2,0V22A.945.945,0,0,0,12,21Z"
                            fill="#ffe3a4"
                        />
                    }
                />
            </div>
        </div>
    );
}
