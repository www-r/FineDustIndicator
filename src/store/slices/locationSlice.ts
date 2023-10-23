import {
	PayloadAction,
	Reducer,
	SliceCaseReducers,
	createSlice
} from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { LocationData, MyLocation, AllLocation, RootState } from '../../type';

interface InitialState {
	myLocation: MyLocation;
	allLocation: AllLocation;
}

const initialState: InitialState = {
	myLocation: {
		sidoName: '서울',
		stationName: '강남구',
		dataTime: undefined,
		pm10Grade: undefined,
		pm10Value: undefined,
		isPinned: false
	},
	allLocation: {
		sidoName: '서울'
	}
};

export const locationSlice = createSlice({
	name: 'location',
	initialState: initialState,
	reducers: {
		setMyLocation: (state: InitialState, action: PayloadAction<MyLocation>) => {
			state.myLocation.sidoName = action.payload.sidoName;
			state.myLocation.stationName = action.payload.stationName;
			state.myLocation.dataTime = action.payload.dataTime;
			state.myLocation.pm10Grade = action.payload.pm10Grade;
			state.myLocation.pm10Value = action.payload.pm10Value;
			state.myLocation.isPinned = action.payload.isPinned;
		},
		setAllLocation: (
			state: InitialState,
			action: PayloadAction<AllLocation>
		) => {
			state.allLocation.sidoName = action.payload.sidoName;
		}
	}
});

export const { setMyLocation, setAllLocation } = locationSlice.actions;

export function useLocationSlice() {
	const allLocation: AllLocation = useSelector(
		(state: RootState) => state.location.allLocation
	);
	const myLocation: MyLocation = useSelector(
		(state: RootState) => state.location.myLocation
	);
	const dispatch = useDispatch();

	return {
		allLocation,
		myLocation,
		dispatch
	};
}

export default locationSlice.reducer;
