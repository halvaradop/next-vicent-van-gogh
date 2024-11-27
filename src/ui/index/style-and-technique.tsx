import Image from "next/image"
import styleAndTechnique from "@/assets/style-and-technique.webp"

export const StyleAndTechnique = () => {
    return (
        <section>
            <div>
                <h2 className="fluency-5xl">
                    style and technique
                    <span className="size-2 inline-block rounded bg-orange-600" />
                </h2>
                <p className="mt-10">
                    Vibrant strokes, intense colors and deep emotions give life to works that capture the human essence. Each
                    brushstroke conveys passion, movement and a unique perspective that transforms the way art is interpreted.
                </p>
            </div>
            <Image
                className="mt-4"
                src={styleAndTechnique}
                alt="An illustration showcasing the style and technique of Vincent van Gogh"
            />
        </section>
    )
}
