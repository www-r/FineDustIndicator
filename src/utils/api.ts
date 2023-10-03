import axios from 'axios';
const { VITE_SERVICE_KEY, VITE_API_URL } = import.meta.env;
const getParams = (searchDate, region) => {
	return {
		serviceKey: VITE_SERVICE_KEY,
		returnType: 'json',
		searchDate: searchDate,
		sidoName: region
		// ver: '1.0'
	};
};
export const axiosInstance = axios.create({
	baseURL: VITE_API_URL,
	timeout: 1000,
	params: { getParams }
});

export const getData = async (searchDate, region) => {
	const res = await axios.get(VITE_API_URL, {
		params: { ...getParams(searchDate, region) }
	});
	console.log('getData:', res.data.response.body.items);

	return;
};
