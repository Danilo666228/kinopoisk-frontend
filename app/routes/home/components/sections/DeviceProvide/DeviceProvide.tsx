import { SectionCard } from '@/components/shared'

import { Typography } from '@/components/ui'
import styles from './DeviceProvide.module.scss'
import { cardStat } from './cardItem'

export const DeviceProvide = () => {
	return (
		<SectionCard
			title='We Provide you streaming experience across various devices.'
			description='With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment.'
			isPagination={false}>
			<div className={styles.content}>
				<ul className={styles.list}>
					{cardStat.map(item => (
						<li className={styles.item}>
							<div className={styles.itemHeader}>
								<div className={styles.itemIcon}>{item.icon}</div>
								<Typography variant='h3'>{item.title}</Typography>
							</div>
							<div className={styles.itemContent}>
								<Typography variant='p'>{item.description}</Typography>
							</div>
						</li>
					))}
				</ul>
			</div>
		</SectionCard>
	)
}
