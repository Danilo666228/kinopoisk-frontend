import { Outlet } from 'react-router'
import { Header } from './components'

export default function Layout() {
	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>
			<footer>Footer</footer>
		</>
	)
}
