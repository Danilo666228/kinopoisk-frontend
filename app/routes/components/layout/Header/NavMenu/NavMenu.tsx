import { NavLink } from 'react-router'
import styles from './NavMenu.module.scss'

interface NavItem {
	label: string
	href: string
}

const navItems: NavItem[] = [
	{
		label: 'Home',
		href: '/'
	},
	{
		label: 'Movies & Shows',
		href: '/movies'
	},
	{
		label: 'Support',
		href: '/support'
	},
	{
		label: 'Subscriptions',
		href: '/subscriptions'
	}
]

export const NavMenu = () => {
	return (
		<nav className={styles.nav}>
			<div className={styles.inner}>
				<ul className={styles.list}>
					{navItems.map((item, index) => (
						<NavLink key={index} className={({ isActive }) => (isActive ? styles.isActive : '')} to={item.href}>
							<li className={styles.item}>{item.label}</li>
						</NavLink>
					))}
				</ul>
			</div>
		</nav>
	)
}
