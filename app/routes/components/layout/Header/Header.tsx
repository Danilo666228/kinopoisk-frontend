import { Logo } from '@/components/icons/LogoIcon'
import { Typography } from '@/components/ui/Typography'
import styles from './Header.module.scss'
import { HeaderActions } from './HeaderActions'
import { NavMenu } from './NavMenu'

export const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.headerWrapper}>
				<div className={styles.logoWrapper}>
					<Logo />
					<Typography variant='h2' className={styles.logoTitle}>
						StreamVibe
					</Typography>
				</div>
				<NavMenu />
				<HeaderActions />
			</div>
		</header>
	)
}
