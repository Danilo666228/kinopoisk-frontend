import { ApolloClientProvider } from '@/shared/contexts/apollo/ApolloClientProvider'
import type { ReactNode } from 'react'

interface ProvidersProps {
	children: ReactNode
}

export const Providers = ({ children }: ProvidersProps) => {
	return <ApolloClientProvider>{children}</ApolloClientProvider>
}
