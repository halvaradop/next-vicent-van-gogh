import type { Metadata } from "next"
import { Metrophobic } from "next/font/google"
import { LayoutProps } from "@/lib/@types/props"
import "@/ui/globals.css"

const inter = Metrophobic({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-metrophobic",
})

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
}

export default function RootLayout({ children }: LayoutProps) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {children}
            </body>
        </html>
    )
}
