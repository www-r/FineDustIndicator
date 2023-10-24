import { useSelector, useDispatch } from 'react-redux';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { sidosArr } from '../../constants/sidosArr';
import { Searchbar, RootState } from '../../type';

const initialState: Searchbar = {
	sido: {
		sidoName: '서울',
		sidoArr: sidosArr
	},
	station: {
		stationName: '강남구',
		stationArr: undefined
	}
};

export const searchbarSlice = createSlice({
	name: 'searchbar',
	initialState: initialState,
	reducers: {
		setSidoName(state: Searchbar, action: PayloadAction<string>) {
			state.sido.sidoName = action.payload;
		},
		setSidoArr(state: Searchbar, action: PayloadAction<string[]>) {
			state.sido.sidoArr = action.payload;
		},
		setStationName(state: Searchbar, action: PayloadAction<string>) {
			state.station.stationName = action.payload;
		},
		setStationArr(state: Searchbar, action: PayloadAction<string[]>) {
			state.station.stationArr = action.payload;
		}
	}
});

export const { setSidoName, setStationName, setStationArr } =
	searchbarSlice.actions;

export function useSearchbarSlice() {
	const sidoName: string = useSelector(
		(state: RootState) => state.searchbar.sido.sidoName
	);
	const sidoArr = sidosArr;
	const stationName: string = useSelector(
		(state: RootState) => state.searchbar.station.stationName
	);
	const stationArr: string[] = useSelector(
		(state: RootState) => state.searchbar.station.stationArr
	);
	const dispatch = useDispatch();

	return {
		sidoName,
		sidoArr,
		stationName,
		stationArr,
		dispatch
	};
}

export default searchbarSlice.reducer;
