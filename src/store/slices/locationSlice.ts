import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { Location } from '../../interface';

interface InitialState {
	myLocation: Location;
	allLocation: Location;
}
const initialState: InitialState = {
	myLocation: { sidoName: '서울', stationName: '강남구' },
	allLocation: { sidoName: '서울', stationName: '' },
};

export const locationSlice = createSlice({
	name: 'location',
	initialState: initialState,
	reducers: {
		setMyLocation: (state, action: PayloadAction<Location>) => {
			state.myLocation.sidoName = action.payload.sidoName;
			state.myLocation.stationName = action.payload.stationName;
		},
		setAllLocation: (state, action: PayloadAction<Location>) => {
			state.allLocation.sidoName = action.payload.sidoName;
			state.allLocation.stationName = action.payload.stationName;
		},
	},
});

export const { setMyLocation, setAllLocation } = locationSlice.actions;

export function useLocationSlice() {
	const allLocation: Location = useSelector((state) => state.location.allLocation);
	const myLocation: Location = useSelector((state) => state.location.myLocation);
	const dispatch = useDispatch();

	return {
		allLocation,
		myLocation,
		dispatch,
	};
}

export default locationSlice.reducer;
