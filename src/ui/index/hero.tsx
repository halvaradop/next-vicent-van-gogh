import Image from "next/image"
import vicent from "@/assets/vicent.png"

export const Hero = () => {
	return (
		<section>
			<div className="min-h-screen flex items-center justify-center flex-col base:flex-row">
				<figure className="w-3/4 max-w-[320px] mx-auto aspect-[3/4]">
					<Image src={vicent} alt="image art" />
				</figure>
				<div className="mt-4">
					<h1 className="uppercase fluency-6xl sm:text-7xl base:text-right">
						Vicent Van Gogh
					</h1>
					<p className="hidden base:mt-8 base:block base:text-right">
						Discover the legacy of Vicent Van Gogh, an artist whose
						genius transcends time
					</p>
				</div>
			</div>
		</section>
	)
}
