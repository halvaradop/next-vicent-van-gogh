import { WaveProps } from "@/lib/@types/props"
import { motion } from "motion/react"
import { titleVariants, paragraphVariants, spanVariants } from "@/ui/motion/hero.motion"
import { merge } from "@/lib/utils"

export const Wave = ({ paragraphs, className, classNameParagraph, classNameSpan }: WaveProps) => {
    return (
        <motion.div className={className} variants={titleVariants} initial="hidden" animate="visible">
            {paragraphs.map((paragraph, index) => (
                <motion.p className={classNameParagraph} variants={paragraphVariants} key={index}>
                    {paragraph.split("").map((letter, index) => (
                        <span className="inline-block overflow-hidden" key={index}>
                            <motion.span
                                className={merge("h-full inline-block", classNameSpan)}
                                variants={spanVariants}
                                key={index}
                            >
                                {letter === " " ? "\u00A0\u00A0" : letter}
                            </motion.span>
                        </span>
                    ))}
                </motion.p>
            ))}
        </motion.div>
    )
}
