import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { MyLocation, AllLocation } from '../../interface';

interface InitialState {
	myLocation: MyLocation;
	allLocation: AllLocation;
}
const initialState: InitialState = {
	myLocation: { sidoName: '서울', stationName: '강남구' },
	allLocation: { sidoName: '서울' },
};

export const locationSlice = createSlice({
	name: 'location',
	initialState: initialState,
	reducers: {
		setMyLocation: (state, action: PayloadAction<MyLocation>) => {
			state.myLocation.sidoName = action.payload.sidoName;
			state.myLocation.stationName = action.payload.stationName;
		},
		setAllLocation: (state, action: PayloadAction<AllLocation>) => {
			state.allLocation.sidoName = action.payload.sidoName;
		},
	},
});

export const { setMyLocation, setAllLocation } = locationSlice.actions;

export function useLocationSlice() {
	const allLocation: AllLocation = useSelector((state) => state.location.allLocation);
	const myLocation: MyLocation = useSelector((state) => state.location.myLocation);
	const dispatch = useDispatch();

	return {
		allLocation,
		myLocation,
		dispatch,
	};
}

export default locationSlice.reducer;
