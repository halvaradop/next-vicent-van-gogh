import Image from "next/image"
import night from "@/assets/night.webp"

export const LegacyAndImpact = () => {
    return (
        <section className="lg:h-dvh lg:content-center lg:relative">
            <div className="lg:w-2/3 lg:text-white lg:relative lg:z-50">
                <h2 className="fluency-5xl">
                    Legacy and Impact
                    <span className="size-2 inline-block rounded bg-orange-600" />
                </h2>
                <p className="my-10">
                    Vincent van Gogh&apos;s legacy transcends art, inspiring movements such as Expressionism and leaving an
                    indelible mark on modern art. His influence is still present in film, literature, music, and contemporary
                    design.
                </p>
                <p>
                    Van Gogh&apos;s bold use of color and emotional depth continue to captivate audiences and artists alike,
                    making his work timeless.
                </p>
            </div>
            <figure className="lg:w-[105dvw] lg:h-full lg:absolute lg:top-0 lg:-left-[17%] lg:bg-black/20">
                <Image
                    className="w-full mt-4 lg:h-full lg:max-w-none lg:m-0 lg:relative lg:-z-10"
                    src={night}
                    alt="Starry Night by Vincent van Gogh"
                />
            </figure>
        </section>
    )
}
