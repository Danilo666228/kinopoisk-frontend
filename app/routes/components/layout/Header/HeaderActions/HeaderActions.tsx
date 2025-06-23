import { SearchIcon } from '@/components/icons'
import { BellIcon } from '@/components/icons/BellIcon'
import clsx from 'clsx'
import type { ComponentProps } from 'react'
import styles from './HeaderActions.module.scss'

interface HeaderActionsProps extends ComponentProps<'div'> {}

export const HeaderActions = ({ className, ...props }: HeaderActionsProps) => {
	return (
		<div className={clsx(styles.container, className)} {...props}>
			<SearchIcon width={24} height={24} color='var(--color-light)' />
			<BellIcon width={24} height={24} color='var(--color-light)' />
		</div>
	)
}
