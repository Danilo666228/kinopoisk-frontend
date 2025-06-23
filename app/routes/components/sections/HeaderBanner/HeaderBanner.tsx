import { ArrowRightIcon } from '@/components/icons/ArrowRightIcon'
import { Link } from 'react-router'
import styles from './HeaderBanner.module.scss'
import banner from '/banner.png'

export const HeaderBanner = () => {
	return (
		<section className={styles.banner}>
			<img loading='lazy' src={banner} alt='banner' />
			<div className={styles.hero}>
				<div className={styles.inner}>
					<h1>The Best Streaming Experience</h1>
					<p>
						StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With
						StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and
						more. You can also create your own watchlists, so you can easily find the content you want to watch.
					</p>
				</div>
				<Link className={styles.link} to={'#'}>
					<div>
						<ArrowRightIcon />
						<span>Start Watching Now</span>
					</div>
				</Link>
			</div>
		</section>
	)
}
