import { type ComponentProps, type ReactNode } from 'react'

import { ArrowIcon } from '@/components/icons'
import { Button, Typography } from '@/components/ui'
import clsx from 'clsx'
import styles from './SectionCard.module.scss'

interface SectionCardProps extends ComponentProps<'section'> {
	title: string
	description: string
	isPagination?: boolean
	maxSlide?: number
	rightAction?: ReactNode
	slide?: number
	onSlideChange?: (direction: 'next' | 'prev') => void
}

export const SectionCard = ({
	title,
	description,
	children,
	maxSlide,
	isPagination = true,
	onSlideChange,
	slide,
	rightAction,
	...props
}: SectionCardProps) => {
	return (
		<section className={styles.section} {...props}>
			<div className={styles.header}>
				<div className={styles.headerWrapper}>
					<Typography className={styles.headerTitle} variant='h1'>
						{title}
					</Typography>
					<Typography className={styles.headerDescription}>{description}</Typography>
				</div>

				{isPagination && (
					<div className={styles.pagination}>
						<div className={styles.paginationWrapper}>
							<Button onClick={() => onSlideChange?.('prev')} disabled={slide === 1} className={styles.paginationBtn} variant='icon'>
								<ArrowIcon color='var(--color-light)' />
							</Button>
							<div className={styles.paginationDotWrapper}>
								{new Array(maxSlide).fill(0).map((_, index) => (
									<span className={clsx(styles.paginationDot, slide === index + 1 && styles.paginationDotActive)} key={index} />
								))}
							</div>
							<Button
								onClick={() => onSlideChange?.('next')}
								disabled={slide === maxSlide}
								className={styles.paginationBtn}
								variant='icon'>
								<ArrowIcon className={styles.paginationBtnRightIcon} color='var(--color-light)' />
							</Button>
						</div>
					</div>
				)}
				{rightAction}
			</div>
			{children}
		</section>
	)
}
