import type { ReactNode } from 'react'

type TypographyVariant = 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

interface TypographyProps {
	className?: string
	variant?: TypographyVariant
	children: ReactNode
}
export const Typography = ({ variant, children, ...props }: TypographyProps) => {
	const Comp = variant ? variant : 'span'

	return <Comp {...props}>{children}</Comp>
}
