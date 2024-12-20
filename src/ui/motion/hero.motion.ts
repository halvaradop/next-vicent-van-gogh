import { Variants } from "motion/react"

export const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
}

export const titleVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            when: "beforeChildren",
            staggerChildren: 1.4,
        },
    },
}

export const paragraphVariants: Variants = {
    hidden: {
        y: 0,
    },
    visible: {
        y: 0,
        transition: {
            when: "beforeChildren",
            duration: 0.5,
            staggerChildren: 0.06,
            ease: "easeIn",
        },
    },
}

export const spanVariants: Variants = {
    hidden: {
        y: "100%",
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
    },
}
