import { SectionCard } from '@/components/shared'
import { Link } from 'react-router'

import styles from './PopularQuestions.module.scss'
import { Accordion } from '@/components/ui/Accordion'

export const PopularQuestions = () => {
	return (
		<SectionCard
			title='Frequently Asked Questions'
			description='Got questions? Weve got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe.'
			isPagination={false}
			rightAction={
				<Link className={styles.link} to={'#'}>
					Ask a Question
				</Link>
			}>
			<Accordion title='What is StreamVibe?'>
				<p>StreamVibe is a platform that allows you to watch movies and TV shows online.</p>
			</Accordion>
		</SectionCard>
	)
}
