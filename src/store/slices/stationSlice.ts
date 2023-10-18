import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

const initialState = [];

export const stationSlice = createSlice({
	name: 'station',
	initialState,
	reducers: {
		setStationArr: (state, action) => {
			state = action.payload;
		},
	},
});

export const { setStationArr } = stationSlice.actions;

export function useStationSlice() {
	const stationArr: string[] = useSelector((state) => state.station);
	const dispatch = useDispatch();

	return {
		stationArr,
		dispatch,
	};
}

export default stationSlice.reducer;
