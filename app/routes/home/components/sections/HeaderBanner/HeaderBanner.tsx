import { PlayIcon } from '@/components/icons/PlayIcon'
import { Typography } from '@/components/ui'
import { ROUTE } from '@/shared/utils/constants/route'
import { Link } from 'react-router'
import styles from './HeaderBanner.module.scss'
import bannerImg from '/banner.png'

export const HeaderBanner = () => {
	return (
		<section className={styles.banner}>
			<div className={styles.bannerImage}>
				<img loading='lazy' src={bannerImg} alt='banner' />
			</div>
			<div className={styles.hero}>
				<div className={styles.inner}>
					<Typography variant='h1'>The Best Streaming Experience</Typography>
					<Typography variant='p'>
						StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With
						StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and
						more. You can also create your own watchlists, so you can easily find the content you want to watch.
					</Typography>
				</div>
				<Link className={styles.link} to={ROUTE.MOVIES}>
					<div>
						<PlayIcon />
						<Typography>Start Watching Now</Typography>
					</div>
				</Link>
			</div>
		</section>
	)
}
