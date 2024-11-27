import { Button } from "@halvaradop/ui-button"

export const Hero = () => {
    return (
        <section className="">
            <div className="min-h-[calc(100dvh-5rem)] content-center">
                <h1 className="fluency-5xl">
                    VICENT VAN GOGH - HISTORY GALLERY
                    <span className="size-2 inline-block rounded bg-orange-600" />
                </h1>
                <div className="mt-6 flex items-start justify-between">
                    <p>30</p>
                    <div className="text-right">
                        <p>March</p>
                        <p>(1853)</p>
                    </div>
                </div>
            </div>
            <div>
                <Button className="uppercase" variant="outline" fullRounded>
                    watch history
                </Button>
                <p className="mt-10">
                    Vicent Van Gogh revolutionized painting with a unique style, charged with emotion and depth. Her passionate
                    life, full of challenges and genius, left an eternal legacy that continues to inspire generations and
                    transform our vision of art and creativity.
                </p>
            </div>
        </section>
    )
}
