import Image from "next/image"
import { Button } from "@halvaradop/ui-button"
import img1 from "@/assets/img-1.webp"
import img2 from "@/assets/img-2.webp"
import img3 from "@/assets/img-3.webp"
import img4 from "@/assets/img-4.webp"
import img5 from "@/assets/img-5.webp"
import img6 from "@/assets/img-6.webp"
import img7 from "@/assets/img-7.webp"
import img8 from "@/assets/img-8.webp"
import img9 from "@/assets/img-9.webp"
import img10 from "@/assets/img-10.webp"
import img11 from "@/assets/img-11.webp"
import img12 from "@/assets/img-12.webp"
import img13 from "@/assets/img-13.webp"

export const Gallery = () => {
    return (
        <section>
            <div>
                <h2 className="fluency-5xl">
                    Gallery
                    <span className="size-2 inline-block rounded bg-orange-600" />
                </h2>
                <p className="mt-10">
                    Explore Vincent van Gogh's gallery, where vibrant colors and unique strokes reveal his genius and timeless
                    artistic legacy.
                </p>
                <Button className="mt-4 uppercase" variant="outline" fullRounded>
                    read more
                </Button>
            </div>
            <section className="mt-10 grid grid-cols-[0.6fr_0.4fr] gap-3" id="gallery">
                <figure className="grid grid-cols-2 gap-3">
                    <Image className="col-span-2 " src={img1} alt="painting 1" />
                    <Image className="col-span-2 " src={img3} alt="painting 3" />
                    <Image className="aspect-[4/5]" src={img5} alt="painting 5" />
                    <Image className="aspect-[4/5]" src={img6} alt="painting 6" />
                    <Image className="col-span-2 " src={img9} alt="painting 9" />
                </figure>
                <figure className="space-y-3">
                    <Image src={img2} alt="painting 2" />
                    <Image src={img4} alt="painting 4" />
                    <Image src={img7} alt="painting 7" />
                    <Image src={img8} alt="painting 8" />
                </figure>
                <figure className="col-span-2">
                    <Image src={img10} alt="painting 10" />
                </figure>
                <figure className="grid grid-cols-5 gap-3 col-span-2">
                    <Image className="col-span-2" src={img11} alt="painting 11" />
                    <div className="col-span-3 space-y-3">
                        <Image src={img12} alt="painting 12" />
                        <Image src={img13} alt="painting 13" />
                    </div>
                </figure>
            </section>
        </section>
    )
}
