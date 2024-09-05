import Image from "next/image"
import vicent from "@/assets/vicent.png"

export const Hero = () => {
	return (
		<section>
			<div className="min-h-screen flex items-center justify-center">
				<figure>
					<Image
						className="w-11/12 mx-auto"
						src={vicent}
						alt="image art"
					/>
					<figcaption className="mt-4">
						<h1 className="uppercase fluency-6xl">
							Vicent Van Gogh
						</h1>
					</figcaption>
				</figure>
			</div>
			<p>
				Discover the legacy of Vicent Van Gogh, an artist whose genius
				transcends time
			</p>
		</section>
	)
}
