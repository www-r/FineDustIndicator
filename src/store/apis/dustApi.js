import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import qs from 'qs'

const args = {
  serviceKey: import.meta.env.VITE_SERVICE_KEY,
  returnType: 'json',
  numOfRows: '100',
  pageNo: '1',
  ver: '1.0',
}

export const dustApi = createApi({
  reducerPath: 'dustApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    paramsSerializer: (params) => qs.stringify(params, { encode: false })
  }),
  endpoints: (builder) => ({
    getDusts: builder.query({
      query: (sidoName) => {
        return {
          url: '',
          params: {...args, sidoName},
        }
      },
      transformResponse: responseData => {
        return responseData['response']['body']['items']
      }
    }),
    // 한 쿼리에서 여러 번 요청을 보내고자 할 때 아래와 같이 사용할 수 있습니다.
    getMultipleDusts: builder.query({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const result = await _arg.reduce(async (promise, sidoName) => {
          const argResult = await fetchWithBQ({
            url: '',
            params: {...args, sidoName: sidoName}
          })
          // 에러처리
          if (argResult.error) return {error: argResult.error};
          // 앞서 처리된 Promisedata 받아오기
          const promiseData = await promise.then()
          return Promise.resolve([...promiseData, ...argResult.data['response']['body']['items']])
        }, Promise.resolve([]))
        return result.error ? { error: result.error } : { data: result }
      }
    }),
  }),
});
 
export const {
  useGetDustsQuery, useGetMultipleDustsQuery
} = dustApi;
