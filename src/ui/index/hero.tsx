"use client"
import { motion } from "motion/react"
import { Wave } from "@/ui/wave"
import { Button } from "@halvaradop/ui-button"
import { containerVariants, spanVariants } from "@/ui/motion/hero.motion"

const paragraphs = ["VICENT VAN GOGH - ", "HISTORY GALLERY"]

export const Hero = () => {
    return (
        <section className="base:min-h-[calc(100dvh-5rem)] base:content-center">
            <div className="min-h-[calc(100dvh-5rem)] content-center base:min-h-min">
                <h1 className="text-fluid-3xl xs:text-fluid-4xl sm:text-fluid-5xl base:text-fluid-6xl">
                    <Wave paragraphs={paragraphs} />
                    <span className="size-2 inline-block rounded bg-orange-600" />
                </h1>
                <motion.div
                    className="mt-6 flex items-start justify-between"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.p variants={spanVariants}>30</motion.p>
                    <div className="text-right sm:w-1/2 sm:flex sm:justify-between">
                        <motion.p variants={spanVariants}>March</motion.p>
                        <motion.p variants={spanVariants}>(1853)</motion.p>
                    </div>
                </motion.div>
            </div>
            <div className="base:mt-20 base:grid base:grid-cols-[0.4fr_0.6fr]">
                <Button className="uppercase" variant="outline" fullRounded>
                    watch history
                </Button>
                <p className="mt-10 text-justify base:m-0 base:ml-auto">
                    Vicent Van Gogh revolutionized painting with a unique style, charged with emotion and depth. Her passionate
                    life, full of challenges and genius, left an eternal legacy that continues to inspire generations and
                    transform our vision of art and creativity.
                </p>
            </div>
        </section>
    )
}
