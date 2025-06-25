import clsx from 'clsx'
import type { ComponentProps } from 'react'
import styles from './Button.module.scss'

type ButtonVariant = 'icon' | 'outline'

interface ButtonProps extends ComponentProps<'button'> {
	loading?: boolean
	variant?: ButtonVariant
}

export const Button = ({ className, children, variant = 'outline', disabled, ...props }: ButtonProps) => {
	return (
		<button className={clsx(styles.button, styles[variant], className, disabled && styles.disabled)} {...props}>
			{children}
		</button>
	)
}
