import { SearchIcon } from '@/components/icons'
import { BellIcon } from '@/components/icons/BellIcon'
import { Logo } from '@/components/icons/LogoIcon'
import styles from './Header.module.scss'
import { NavMenu } from './NavMenu'

export const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.inner}>
				<div className={styles.logo}>
					<Logo />
					<h3 className={styles['logo-title']}>StreamVibe</h3>
				</div>
				<NavMenu />
				<div>
					<SearchIcon width={24} height={24} color='var(--color-light)' />
					<BellIcon width={24} height={24} color='var(--color-light)' />
				</div>
			</div>
		</header>
	)
}
