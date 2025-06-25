import { InMemoryCache } from '@apollo/client/cache'
import { ApolloClient } from '@apollo/client/core'
import { createHttpLink } from '@apollo/client/link/http'

const httpLink = createHttpLink({
	uri: import.meta.env.VITE_SERVER_URL,
	credentials: 'include'
})

const client = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache(),
	ssrMode: typeof window === 'undefined'
})

export { client }
