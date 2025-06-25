import { client } from '@/shared/contexts/apollo/apollo-client'
import { ApolloProvider } from '@apollo/client/react'

import type { ReactNode } from 'react'

interface ApolloClientProviderProps {
	children: ReactNode
}

export const ApolloClientProvider = ({ children }: ApolloClientProviderProps) => {
	return <ApolloProvider client={client}>{children}</ApolloProvider>
}
