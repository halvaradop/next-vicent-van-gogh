import { merge } from "@/lib/utils"
import ImageNext, { ImageProps } from "next/image"

export const Image = ({ className, src, alt }: ImageProps) => {
    return (
        <ImageNext
            className={merge("selection:text-transparent selection:bg-transparent", className)}
            src={src}
            alt={alt}
            priority
            draggable={false}
        />
    )
}
