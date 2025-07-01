import { DeviceProvide, HeaderBanner, OverviewCategory, PopularQuestions } from './components/sections'

export default function HomePage() {
	return (
		<>
			{/* <HeaderBanner /> */}
			<OverviewCategory />
			<DeviceProvide />
			<PopularQuestions />
		</>
	)
}
