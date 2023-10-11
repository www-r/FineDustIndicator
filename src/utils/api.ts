import axios from 'axios';
const { VITE_SERVICE_KEY, VITE_API_URL } = import.meta.env;

const getParams = (searchDate, stationName) => {
	return {
		serviceKey: VITE_SERVICE_KEY,
		returnType: 'json',
		searchDate: searchDate,
		sidoName: stationName
		// ver: '1.0'
	};
};
export const axiosInstance = axios.create({
	baseURL: VITE_API_URL,
	timeout: 1000,
	params: { getParams }
});
const getDataTime = () => {
	const today = new Date();
	const year = today.getFullYear();
	const month = ('0' + (today.getMonth() + 1)).slice(-2);
	const day = ('0' + today.getDate()).slice(-2);
	const dataTime = year + '-' + month + '-' + day;
	return dataTime;
};

export const getData = async sidoName => {
	const searchDate = getDataTime();
	const res = await axios.get(VITE_API_URL, {
		params: { ...getParams(searchDate, sidoName) }
	});
	console.log('getData:', res.data.response.body.items);

	return res.data.response.body.items;
};
