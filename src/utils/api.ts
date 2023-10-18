import axios from 'axios';
const { VITE_SERVICE_KEY, VITE_API_URL } = import.meta.env;

const getSidoParams = (searchDate, sidoName) => {
	return {
		serviceKey: VITE_SERVICE_KEY,
		returnType: 'json',
		searchDate,
		sidoName,
		// ver: '1.0'
	};
};
const getStationParams = (dataTerm, stationName) => {
	return {
		serviceKey: VITE_SERVICE_KEY,
		returnType: 'json',
		dataTerm,
		stationName,
	};
};
// export const sidoInstance = axios.create({
// 	baseURL: VITE_API_URL,
// 	timeout: 1000,
// 	params: { getSidoParams },
// });
// export const stationNameInstance = axios.create({
// 	baseURL: VITE_API_URL,
// 	timeout: 1000,
// 	params: { getStationParams },
// });
const getDataTime = () => {
	const today = new Date();
	const year = today.getFullYear();
	const month = ('0' + (today.getMonth() + 1)).slice(-2);
	const day = ('0' + today.getDate()).slice(-2);
	const dataTime = year + '-' + month + '-' + day;
	return dataTime;
};

export const getSidoData = async (sidoName) => {
	const searchDate = getDataTime();
	const res = await axios.get(VITE_API_URL + '/getCtprvnRltmMesureDnsty', {
		params: { ...getSidoParams(searchDate, sidoName) },
	});
	return res.data.response.body.items;
};
export const getStationData = async (stationName) => {
	const res = await axios.get(VITE_API_URL + '/getMsrstnAcctoRltmMesureDnsty', {
		params: { ...getStationParams('DAILY', stationName) },
	});
	return res.data.response.body.items[0];
};
