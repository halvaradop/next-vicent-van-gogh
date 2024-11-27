import Image from "next/image"
import { Button } from "@halvaradop/ui-button"
import vicent from "@/assets/vicent.png"

export const AboutHim = () => {
    return (
        <section>
            <div>
                <p>About Him</p>
                <h2 className="fluency-5xl">
                    This is a short history about him and his career
                    <span className="size-2 inline-block rounded bg-orange-600" />
                </h2>
            </div>
            <div>
                <div className="my-10">
                    <p>
                        Vincent van Gogh was a visionary of art, known for his emotive and unique style. Born in a humble
                        environment, he faced countless personal and professional challenges, which deeply marked his work.
                        Through intense colors and expressive strokes, he captured his vision of the world, exploring themes such
                        as loneliness, nature and humanity. Although misunderstood during his lifetime, his artistic legacy gained
                        strength after his death, becoming an iconic figure who revolutionized painting and left an indelible mark
                        on the history of art.
                    </p>
                    <Button className="mt-4 uppercase" variant="outline" fullRounded>
                        read more
                    </Button>
                </div>
                <Image className="aspect-square object-cover" src={vicent} alt="Vincent van Gogh self-portrait" />
            </div>
        </section>
    )
}
