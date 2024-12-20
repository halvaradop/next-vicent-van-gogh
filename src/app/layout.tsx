import type { Metadata } from "next"
import { Metrophobic } from "next/font/google"
import { LayoutProps } from "@/lib/@types/props"
import "@/ui/globals.css"
import { Header } from "@/ui/header"
import { Scrollbar } from "@/ui/scrollbar"

const inter = Metrophobic({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-metrophobic",
})

const title = "Vicent Van Gogh Museum"
const description = "Virtual Museum of Vicent Van Gogh, a little about his life and his works"

export const metadata: Metadata = {
    title,
    description,
    category: "art",
    applicationName: title,
    robots: "index, follow",
    classification: "website",
    keywords: "art, museum, vicent van gogh, paintings, history, virtual museum",
    creator: "halvaradop <hernanvid123@gmail.com>",
    authors: {
        name: "halvaradop <hernanvid123@gmail.com>",
    },
    openGraph: {
        title,
        description,
        siteName: title,
        type: "website",
        countryName: "Colombia",
        alternateLocale: "en_CO",
        locale: "en_CO",
    },
    twitter: {
        title,
        description,
        creator: "halvaradop",
    },
}

export default function RootLayout({ children }: LayoutProps) {
    return (
        <html className="relative scroll-smooth" lang="en">
            <body
                className={`${inter.className} relative overflow-x-hidden overflow-y-scroll selection:text-orange-100 selection:bg-orange-500 scroll:w-2 track:my-1 thumb:rounded thumb:bg-black`}
            >
                <Scrollbar>
                    <Header />
                    {children}
                </Scrollbar>
            </body>
        </html>
    )
}
