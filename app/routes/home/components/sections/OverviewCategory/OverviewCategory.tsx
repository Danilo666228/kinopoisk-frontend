import { ArrowIcon } from '@/components/icons'
import { Button, Typography } from '@/components/ui'
import { useGetGenresQuery } from '@/graphql/generated/output'

import clsx from 'clsx'
import { useState } from 'react'
import styles from './OverviewCategory.module.scss'
import placeholder from '/placeholder.png'

const ITEMS_PER_SLIDE = 5

export const OverviewCategory = () => {
	const { data: genres } = useGetGenresQuery()

	const [slide, setSlide] = useState(1)
	const maxSlide = Math.ceil((genres?.getGenres.length || 0) / ITEMS_PER_SLIDE)

	const isCurrentSlide = (index: number) => slide === index

	const handleSlideChange = (direction: 'next' | 'prev') => {
		const isValidMove = direction === 'next' ? slide < maxSlide : slide > 1

		if (isValidMove) {
			setSlide(prev => (direction === 'next' ? prev + 1 : prev - 1))
		}
	}

	return (
		<section className={styles.section}>
			<div className={styles.header}>
				<div className={styles.headerWrapper}>
					<Typography className={styles.headerTitle} variant='h1'>
						Explore our wide variety of categories
					</Typography>
					<Typography className={styles.headerDescription}>
						Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new
					</Typography>
				</div>

				<div className={styles.pagination}>
					<div className={styles.paginationWrapper}>
						<Button onClick={() => handleSlideChange('prev')} disabled={slide === 1} className={styles.paginationBtn} variant='icon'>
							<ArrowIcon color='var(--color-light)' />
						</Button>
						<div className={styles.paginationDotWrapper}>
							{new Array(maxSlide).fill(0).map((_, index) => (
								<span className={clsx(styles.paginationDot, isCurrentSlide(index + 1) && styles.paginationDotActive)} key={index} />
							))}
						</div>
						<Button
							onClick={() => handleSlideChange('next')}
							disabled={maxSlide === slide}
							className={styles.paginationBtn}
							variant='icon'>
							<ArrowIcon className={styles.paginationBtnRightIcon} color='var(--color-light)' />
						</Button>
					</div>
				</div>
			</div>
			<div className={styles.body}>
				<ul className={styles.list}>
					{genres?.getGenres.slice((slide - 1) * ITEMS_PER_SLIDE, slide * ITEMS_PER_SLIDE).map((item, index) => (
						<li key={index} className={styles.listItem}>
							<div className={styles.itemHeader}>
								<img src={placeholder} alt={item.title!} />
							</div>
							<div className={styles.listItemFooter}>
								<Typography>{item.title?.toUpperCase()}</Typography>
								<ArrowIcon className={styles.listItemIcon} />
							</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}
