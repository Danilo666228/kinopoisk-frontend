import { gql } from '@apollo/client/core'
import * as ApolloReactCommon from '@apollo/client/react'
import * as ApolloReactHooks from '@apollo/client/react'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never }
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never }
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: { input: string; output: string }
	String: { input: string; output: string }
	Boolean: { input: boolean; output: boolean }
	Int: { input: number; output: number }
	Float: { input: number; output: number }
	DateTime: { input: any; output: any }
}

export type CreateGenreInput = {
	title: Scalars['String']['input']
}

export type GenreModel = {
	__typename?: 'GenreModel'
	createdAt: Scalars['DateTime']['output']
	id: Scalars['ID']['output']
	title: Scalars['String']['output']
	updatedAt: Scalars['DateTime']['output']
}

export type Mutation = {
	__typename?: 'Mutation'
	createGenre: GenreModel
	deleteGenre: GenreModel
}

export type MutationCreateGenreArgs = {
	data: CreateGenreInput
}

export type MutationDeleteGenreArgs = {
	id: Scalars['String']['input']
}

export type Query = {
	__typename?: 'Query'
	getGenres: Array<GenreModel>
}

export type GetGenresQueryVariables = Exact<{ [key: string]: never }>

export type GetGenresQuery = { __typename?: 'Query'; getGenres: Array<{ __typename?: 'GenreModel'; id: string; title: string }> }

export const GetGenresDocument = gql`
	query GetGenres {
		getGenres {
			id
			title
		}
	}
`

/**
 * __useGetGenresQuery__
 *
 * To run a query within a React component, call `useGetGenresQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGenresQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGenresQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetGenresQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetGenresQuery, GetGenresQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions }
	return ApolloReactHooks.useQuery<GetGenresQuery, GetGenresQueryVariables>(GetGenresDocument, options)
}
export function useGetGenresLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetGenresQuery, GetGenresQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions }
	return ApolloReactHooks.useLazyQuery<GetGenresQuery, GetGenresQueryVariables>(GetGenresDocument, options)
}
export function useGetGenresSuspenseQuery(
	baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetGenresQuery, GetGenresQueryVariables>
) {
	const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions }
	return ApolloReactHooks.useSuspenseQuery<GetGenresQuery, GetGenresQueryVariables>(GetGenresDocument, options)
}
export type GetGenresQueryHookResult = ReturnType<typeof useGetGenresQuery>
export type GetGenresLazyQueryHookResult = ReturnType<typeof useGetGenresLazyQuery>
export type GetGenresSuspenseQueryHookResult = ReturnType<typeof useGetGenresSuspenseQuery>
export type GetGenresQueryResult = ApolloReactCommon.QueryResult<GetGenresQuery, GetGenresQueryVariables>
