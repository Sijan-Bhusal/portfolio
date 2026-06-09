"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";

interface ThemeToggleProps {
    wrapperClassName: string;
    trackClassName: string;
    knobClassName: string;
    lightIconWidth: number;
    lightIconHeight: number;
    darkIconWidth: number;
    darkIconHeight: number;
    lightIcon: React.ReactNode;
    darkIcon: React.ReactNode;
    lightX: number;
    darkX: number;
}

export function ThemeToggle({
    wrapperClassName,
    trackClassName,
    knobClassName,
    lightIconWidth,
    lightIconHeight,
    darkIconWidth,
    darkIconHeight,
    lightIcon,
    darkIcon,
    lightX,
    darkX,
}: ThemeToggleProps) {
    const { theme, setTheme } = useTheme();

    return (
        <div className={wrapperClassName}>
            <div
                className={trackClassName}
                onClick={() =>
                    theme === "light" ? setTheme("dark") : setTheme("light")
                }
            >
                <motion.div
                    initial={false}
                    animate={{ x: theme === "dark" ? darkX : lightX }}
                    transition={{
                        type: "spring",
                        stiffness: 70,
                        damping: 15,
                        ease: [0.65, 0.05, 0.36, 1],
                        duration: 0.55,
                    }}
                    className={knobClassName}
                >
                    <AnimatePresence mode="wait">
                        {theme === "light" ? (
                            <motion.svg
                                key="moon"
                                initial={{ rotate: -90, scale: 0, opacity: 0 }}
                                animate={{ rotate: 0, scale: 1, opacity: 1 }}
                                exit={{ rotate: 90, scale: 0, opacity: 0 }}
                                transition={{
                                    duration: 0.25,
                                    ease: "easeInOut",
                                }}
                                xmlns="http://www.w3.org/2000/svg"
                                width={lightIconWidth}
                                height={lightIconHeight}
                                viewBox="0 0 17 19"
                            >
                                {lightIcon}
                            </motion.svg>
                        ) : (
                            <motion.svg
                                key="sun"
                                initial={{ rotate: -90, scale: 0, opacity: 0 }}
                                animate={{ rotate: 0, scale: 1, opacity: 1 }}
                                exit={{ rotate: 90, scale: 0, opacity: 0 }}
                                transition={{
                                    duration: 0.25,
                                    ease: "easeInOut",
                                }}
                                xmlns="http://www.w3.org/2000/svg"
                                width={darkIconWidth}
                                height={darkIconHeight}
                                viewBox="0 0 24 24"
                            >
                                {darkIcon}
                            </motion.svg>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
}
