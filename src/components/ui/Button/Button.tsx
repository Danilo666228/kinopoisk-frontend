import { LoaderIcon } from '@/components/icons'
import clsx from 'clsx'
import type { ComponentProps } from 'react'
import styles from './Button.module.scss'

type ButtonVariant = 'icon' | 'outline'

interface ButtonProps extends ComponentProps<'button'> {
	loading?: boolean
	variant?: ButtonVariant
}

export const Button = ({ className, children, disabled, loading, variant = 'outline', ...props }: ButtonProps) => {
	return (
		<button className={clsx(styles.button, styles[variant], className, disabled && styles.disabled)} {...props}>
			{loading ? <LoaderIcon className='animate-spin' /> : children}
		</button>
	)
}
