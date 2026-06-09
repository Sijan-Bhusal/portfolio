import type { Metadata } from "next";
import "./globals.css";
import { silka } from "./fonts";
import { ThemeProvider } from "@/components/theme-provider";
export const metadata: Metadata = {
    title: "Sijan Bhusal — Developer",
    description: "Computer Science student & developer",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${silka.className} antialiased select-none`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
