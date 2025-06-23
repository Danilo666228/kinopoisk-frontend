import { Logo } from '@/components/icons/LogoIcon'
import { Typography } from '@/components/ui/Typography'
import styles from './Header.module.scss'
import { HeaderActions } from './HeaderActions'
import { NavMenu } from './NavMenu'

export const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.inner}>
				<div className={styles.logo}>
					<Logo />
					<Typography variant='h1' className={styles['logo-title']}>
						StreamVibe
					</Typography>
				</div>
				<NavMenu />
				<HeaderActions />
			</div>
		</header>
	)
}
