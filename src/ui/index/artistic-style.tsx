import cry from "@/assets/cry.png"
import sunflowers from "@/assets/sunflowers.png"
import Image from "next/image"

export const ArtisticStyle = () => {
	return (
		<div className="min-h-screen flex items-center justify-center flex-col gap-y-5 relative">
			<h2 className="uppercase fluency-5xl z-10">Artistic Style</h2>
			<p className="z-10">
				A cry of color and emotion, a frenetic dance of brushstrokes
				that turn realiy into a whirlwind of passion and light
			</p>
			<figure className="aspect-[6/7] absolute top-5 left-0">
				<Image
					className="w-3/4 h-full mr-auto opacity-95"
					src={sunflowers}
					alt="sunflowers draw"
				/>
			</figure>
			<figure className="aspect-[7/8] absolute bottom-5 right-0">
				<Image
					className="w-5/6 h-full ml-auto opacity-95"
					src={cry}
					alt="cry draw"
				/>
			</figure>
		</div>
	)
}
