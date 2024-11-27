import Image from "next/image"
import night from "@/assets/night.webp"

export const LegacyAndImpact = () => {
    return (
        <section>
            <div>
                <h2 className="fluency-5xl">
                    Legacy and Impact
                    <span className="size-2 inline-block rounded bg-orange-600" />
                </h2>
                <p className="my-10">
                    Vincent van Gogh's legacy transcends art, inspiring movements such as Expressionism and leaving an indelible
                    mark on modern art. His influence is still present in film, literature, music, and contemporary design.
                </p>
                <p>
                    Van Gogh's bold use of color and emotional depth continue to captivate audiences and artists alike, making his
                    work timeless.
                </p>
            </div>
            <Image className="mt-4" src={night} alt="Starry Night by Vincent van Gogh" />
        </section>
    )
}
