"use client"
import { useRef } from "react"
import { ScrollbarProps } from "@/lib/@types/props"

export const Scrollbar = ({ children }: ScrollbarProps) => {
    const ref = useRef<HTMLDivElement>(null)
    return <section ref={ref}>{children}</section>
}
