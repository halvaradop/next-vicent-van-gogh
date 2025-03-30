/**
 * @deprecated to be removed in the next major version
 */
import type { Config } from "tailwindcss"
import utilities from "@halvaradop/tailwindcss-utilities"

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "node_modules/@halvaradop/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            screens: {
                xs: "450px",
                base: "900px",
            },
            fontFamily: {
                metrophobic: "var(--font-metrophobic)",
            },
        },
    },
    plugins: [utilities],
}
export default config
