import { PayloadAction } from '@reduxjs/toolkit';
export type LocationData = {
	sidoName: string;
	stationName: string;
	dataTime?: string;
	pm10Grade?: string;
	pm10Value?: string;
	isPinned: boolean;
};
export type Location = Omit<
	LocationData,
	'dataTime' | 'pm10Grade' | 'pm10Value' | 'isPinned'
>;
//sidoName, stationName

export type MyLocation = LocationData;
export type AllLocation = Omit<Location, 'stationName'>;
export type PinnedLocation = LocationData[];
export type RootState = {
	location: {
		myLocation: MyLocation;
		allLocation: AllLocation;
	};
	pinned: {
		pinnedLocations: PinnedLocation;
	};
};
