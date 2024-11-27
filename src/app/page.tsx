import { Hero } from "@/ui/index/hero"
import { AboutHim } from "@/ui/index/about-him"
import { Stuff } from "@/ui/index/stuff"
import { StyleAndTechnique } from "@/ui/index/style-and-technique"
import { Gallery } from "@/ui/index/gallery"
import { LegacyAndImpact } from "@/ui/index/legacy-and-impact"

const Index = () => {
    return (
        <main className="w-11/12 mx-auto mb-20 uppercase space-y-28 sm:space-y-32 md:space-y-36 base:space-y-44 lg:w-10/12 lg:mb-0">
            <Hero />
            <AboutHim />
            <StyleAndTechnique />
            <Stuff />
            <Gallery />
            <LegacyAndImpact />
        </main>
    )
}

export default Index
