"use client"
import Image from "next/image"
import cry from "@/assets/cry.png"
import sunflowers from "@/assets/sunflowers.png"

export const ArtisticStyle = () => {
	return (
		<div className="min-w-full">
			<div className="w-10/12 min-h-screen mx-auto flex items-center justify-center flex-col gap-y-5 relative">
				<h2 className="uppercase fluency-5xl z-10 base:max-w-sm base:fluency-6xl">
					Artistic Style
				</h2>
				<p className="z-10 base:max-w-[60vw] base:mr-[17vw] base:mb-[5vw] base:text-left base:-order-1">
					A cry of color and emotion, a frenetic dance of brushstrokes
					that turn realiy into a whirlwind of passion and light
				</p>
				<figure className="w-1/2 max-w-[220px] aspect-[6/7] absolute top-5 left-0 base:left-auto base:right-0">
					<Image
						className="mr-auto opacity-90"
						src={sunflowers}
						alt="sunflowers draw"
						priority
					/>
				</figure>
				<figure className="w-2/3 max-w-[305px] aspect-[7/8] absolute bottom-5 right-0 base:left-0">
					<Image
						className="ml-auto opacity-90"
						src={cry}
						alt="cry draw"
						priority
					/>
				</figure>
			</div>
		</div>
	)
}
