import { ArrowIcon } from '@/components/icons'
import { Typography } from '@/components/ui'
import { useGetGenresQuery } from '@/graphql/generated/output'

import { SectionCard } from '@/components/shared'
import { useState } from 'react'
import styles from './OverviewCategory.module.scss'
import placeholder from '/placeholder.png'

const ITEMS_PER_SLIDE = 5

export const OverviewCategory = () => {
	const { data: genres } = useGetGenresQuery()

	const [slide, setSlide] = useState(1)
	const maxSlide = Math.ceil((genres?.getGenres.length || 0) / ITEMS_PER_SLIDE)

	const handleSlideChange = (direction: 'next' | 'prev') => {
		const isValidMove = direction === 'next' ? slide < maxSlide : slide > 1

		if (isValidMove) {
			setSlide(prev => (direction === 'next' ? prev + 1 : prev - 1))
		}
	}

	return (
		<SectionCard
			title='Explore our wide variety of categories'
			description="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
			onSlideChange={handleSlideChange}
			slide={slide}
			maxSlide={maxSlide}>
			<div className={styles.body}>
				<ul className={styles.list}>
					{genres?.getGenres.slice((slide - 1) * ITEMS_PER_SLIDE, slide * ITEMS_PER_SLIDE).map((item, index) => (
						<li key={index} className={styles.listItem}>
							<div className={styles.itemHeader}>
								<img src={placeholder} alt={item.title!} />
							</div>
							<div className={styles.listItemFooter}>
								<Typography>{item.title}</Typography>
								<ArrowIcon className={styles.listItemIcon} />
							</div>
						</li>
					))}
				</ul>
			</div>
		</SectionCard>
	)
}
