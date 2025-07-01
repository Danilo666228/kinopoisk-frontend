import { useState, type ComponentProps } from 'react'

import { ArrowIcon } from '@/components/icons'
import { Typography } from '../Typography'
import styles from './Accordion.module.scss'

interface AccordionProps extends ComponentProps<'details'> {
	title: string
}

export const Accordion = ({ title, children, ...props }: AccordionProps) => {
	const [isOpen, setIsOpen] = useState(false)

	const handleToggle = () => {
		setIsOpen(!isOpen)
	}

	return (
		<details {...props} className={styles.accordion}>
			<summary className={styles.accordionHeader} onClick={handleToggle}>
				<div className={styles.accordionHeaderIcon}>01</div>
				<Typography variant='h3'>{title}</Typography>
				<ArrowIcon className={`${styles.accordionArrow} ${isOpen ? styles.rotated : ''}`} />
			</summary>
			<div className={styles.accordionContent}>{children}</div>
		</details>
	)
}
