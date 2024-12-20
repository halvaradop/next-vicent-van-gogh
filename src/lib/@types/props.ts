export interface LayoutProps {
    children: React.ReactNode
}

export interface WaveProps {
    className?: string
    classNameParagraph?: string
    classNameSpan?: string
    paragraphs: string[]
}

export interface ScrollbarProps extends LayoutProps {
    className?: string
}
