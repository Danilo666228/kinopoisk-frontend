interface ArrowIconProps extends React.SVGProps<SVGSVGElement> {}
export const ArrowIcon = ({ ...props }: ArrowIconProps) => {
	return (
		<svg width='18' height='16' viewBox='0 0 18 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<path d='M16.5 8L1.5 8M1.5 8L8.25 14.75M1.5 8L8.25 1.25' stroke='white' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
		</svg>
	)
}
