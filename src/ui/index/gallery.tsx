"use client"
import { useRef } from "react"
import { Button } from "@halvaradop/ui-button"
import { galleryImages } from "@/lib/images"
import { motion, useScroll, useSpring, useTransform } from "motion/react"
import { Image } from "@/ui/common/image"

export const Gallery = () => {
    const ref = useRef<HTMLElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end center"],
    })
    const top = useTransform(scrollYProgress, [0, 1], ["0", "84.5%"])

    return (
        <section className="base:grid base:grid-cols-[0.4fr,0.6fr] base:gap-x-10 base:relative" ref={ref}>
            <motion.div className="base:h-fit base:relative" style={{ top }}>
                <h2 className="fluency-5xl">
                    Gallery
                    <span className="size-2 inline-block rounded bg-orange-600" />
                </h2>
                <p className="mt-10">
                    Explore Vincent van Gogh&apos;s gallery, where vibrant colors and unique strokes reveal his genius and
                    timeless artistic legacy.
                </p>
                <Button className="mt-4 uppercase" variant="outline" fullRounded>
                    read more
                </Button>
            </motion.div>
            <section className="mt-10 grid grid-cols-[0.6fr_0.4fr] gap-3 base:m-0" id="gallery">
                <figure className="grid grid-cols-2 gap-3">
                    <Image className="w-full col-span-2" src={galleryImages[0]} alt="painting 1" />
                    <Image className="w-full col-span-2" src={galleryImages[2]} alt="painting 3" />
                    <Image className="w-full aspect-[4/5]" src={galleryImages[4]} alt="painting 5" />
                    <Image className="w-full aspect-[4/5]" src={galleryImages[5]} alt="painting 6" />
                    <Image className="w-full col-span-2" src={galleryImages[8]} alt="painting 9" />
                </figure>
                <figure className="space-y-3">
                    <Image className="w-full" src={galleryImages[1]} alt="painting 2" />
                    <Image className="w-full" src={galleryImages[3]} alt="painting 4" />
                    <Image className="w-full" src={galleryImages[6]} alt="painting 7" />
                    <Image className="w-full" src={galleryImages[7]} alt="painting 8" />
                </figure>
                <figure className="col-span-2">
                    <Image className="w-full" src={galleryImages[9]} alt="painting 10" />
                </figure>
                <figure className="grid grid-cols-5 gap-3 col-span-2">
                    <Image className="w-full col-span-2" src={galleryImages[10]} alt="painting 11" />
                    <div className="col-span-3 space-y-3">
                        <Image className="w-full" src={galleryImages[11]} alt="painting 12" />
                        <Image className="w-full" src={galleryImages[12]} alt="painting 13" />
                    </div>
                </figure>
            </section>
        </section>
    )
}
