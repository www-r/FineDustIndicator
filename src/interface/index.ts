export interface Location {
	sidoName: string;
	stationName: string;
}

export interface LocationData {
	sidoName?: string;
	stationName?: string;
	dataTime: string;
	pm10Grade: string;
	pm10Value: string;
}
