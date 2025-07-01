import { GamingConsoleIcon, LaptopIcon, MobileIcon, SmartTVIcon, TabletIcon, VRHeadsetsIcon } from '@/components/icons'

import type { ReactNode } from 'react'

type CardItem = {
	id: number
	title: string
	description: string
	icon?: ReactNode
}

export const cardStat: CardItem[] = [
	{
		id: 1,
		title: 'Smartphones',
		description:
			'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
		icon: <MobileIcon color='var(--color-red-45)' />
	},
	{
		id: 2,
		title: 'Tablet',
		description:
			'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
		icon: <TabletIcon color='var(--color-red-45)' />
	},
	{
		id: 3,
		title: 'Smart TV',
		description:
			'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
		icon: <SmartTVIcon color='var(--color-red-45)' />
	},
	{
		id: 4,
		title: 'Laptops',
		description:
			'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
		icon: <LaptopIcon color='var(--color-red-45)' />
	},
	{
		id: 5,
		title: 'Gaming Consoles',
		description:
			'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
		icon: <GamingConsoleIcon color='var(--color-red-45)' />
	},
	{
		id: 6,
		title: 'VR Headsets',
		description:
			'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
		icon: <VRHeadsetsIcon color='var(--color-red-45)' />
	}
]
