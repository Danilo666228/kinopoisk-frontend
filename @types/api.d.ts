interface MutationSettings<Params = void, Func = unknown> {
	config?: ApiRequestConfig
	options?: import('@tanstack/react-query').UseMutationOptions<Awaited<ReturnType<Func>>, any, Params, any>
}

interface QuerySettings<Func = unknown> {
	config?: ApiRequestConfig
	options?: Omit<import('@tanstack/react-query').UseQueryOptions<Awaited<ReturnType<Func>>, any, Awaited<ReturnType<Func>>, any>, 'queryKey'>
}

interface SuspenceQuerySettings<Func = unknown> {
	config?: ApiRequestConfig
	options?: Omit<
		import('@tanstack/react-query').UseSuspenseQueryOptions<Awaited<ReturnType<Func>>, any, Awaited<ReturnType<Func>>, any>,
		'queryKey'
	>
}

interface InfiniteQuerySettings<Func = unknown> {
	config?: ApiRequestConfig
	options?: Omit<
		import('@tanstack/react-query').UseInfiniteQueryOptions<Awaited<ReturnType<Func>>, any, Awaited<ReturnType<Func>>, any, any>,
		'queryKey'
	>
}

type ApiRequestConfig = import('axios').AxiosRequestConfig

type RequestConfig<Params = undefined> = Params extends undefined ? { config?: ApiRequestConfig } : { params: Params; config?: ApiRequestConfig }
