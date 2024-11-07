"use client"
import Image from "next/image"
import vicent from "@/assets/vicent.png"

export const Hero = () => {
    return (
        <section className="min-w-full">
            <div className="w-11/12 min-h-screen mx-auto flex items-center justify-center flex-col base:flex-row lg:max-w-screen-xl">
                <figure className="w-3/4 max-w-[320px] mx-auto aspect-[3/4]">
                    <Image className="opacity-90" src={vicent} alt="image art" priority />
                </figure>
                <div className="mt-4 z-10">
                    <h1 className="uppercase fluency-6xl sm:text-7xl base:text-right">Vicent Van Gogh</h1>
                    <p className="hidden base:mt-8 base:block base:text-right">
                        Discover the legacy of Vicent Van Gogh, an artist whose genius transcends time
                    </p>
                </div>
            </div>
        </section>
    )
}
