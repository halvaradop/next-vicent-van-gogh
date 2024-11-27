import Image from "next/image"
import styleAndTechnique from "@/assets/style-and-technique.webp"

export const StyleAndTechnique = () => {
    return (
        <section className="lg:h-dvh lg:content-center lg:relative">
            <div className="lg:w-2/3 lg:text-white lg:relative lg:z-10">
                <h2 className="fluency-5xl">
                    style and technique
                    <span className="size-2 inline-block rounded bg-orange-600" />
                </h2>
                <p className="mt-10 text-justify lg:text-left">
                    Vibrant strokes, intense colors and deep emotions give life to works that capture the human essence. Each
                    brushstroke conveys passion, movement and a unique perspective that transforms the way art is interpreted.
                </p>
            </div>
            <figure className="lg:w-[105dvw] lg:h-full lg:absolute lg:top-0 lg:-left-[17%] lg:bg-black/20">
                <Image
                    className="w-full mt-4 lg:h-full lg:max-w-none lg:m-0 lg:relative lg:-z-10"
                    src={styleAndTechnique}
                    alt="An illustration showcasing the style and technique of Vincent van Gogh"
                />
            </figure>
        </section>
    )
}
