import { ArrowIcon } from '@/components/icons'
import { Button, Typography } from '@/components/ui'
import styles from './OverviewCategory.module.scss'

export const OverviewCategory = () => {
	return (
		<section className={styles.section}>
			<div className={styles.header}>
				<div className={styles.content}>
					<Typography className={styles.title} variant='h1'>
						Explore our wide variety of categories
					</Typography>
					<Typography className={styles.description}>
						Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new
					</Typography>
				</div>

				<div className={styles.controls}>
					<div className={styles.controlsWrapper}>
						<Button className={styles.navButton} variant='icon'>
							<ArrowIcon color='var(--color-light)' />
						</Button>
						<div className={styles.pagination}>
							<span className={styles.paginationDot}></span>
							<span className={styles.paginationDot}></span>
							<span className={styles.paginationDot}></span>
						</div>
						<Button className={styles.navButton} variant='icon'>
							<ArrowIcon className={styles.navButtonIcon} color='var(--color-light)' />
						</Button>
					</div>
				</div>
			</div>
			<div className={styles.body}></div>
		</section>
	)
}
