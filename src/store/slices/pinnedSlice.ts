import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LocationData, Location, PinnedLocation,RootState } from '../../type';

interface InitialState {
	pinnedLocations: PinnedLocation;
}

const initialState: InitialState = {
	pinnedLocations: []
};

export const pinnedSlice = createSlice({
	name: 'pinned',
	initialState: initialState,
	reducers: {
		addPin(state: InitialState, action: PayloadAction<LocationData>) {
			state.pinnedLocations = [...state.pinnedLocations, action.payload];
		},
		removePin(state: InitialState, action: PayloadAction<Location>) {
			state.pinnedLocations = state.pinnedLocations.filter(
				element =>
					!(
						element.stationName === action.payload.stationName &&
						element.sidoName === action.payload.sidoName
					)
			);
		},
		resetPin(state: InitialState) {
			state.pinnedLocations = [];
		}
	}
});
// export const { addFavoriteItem, deleteFavoriteItem } = favoriteSlice.actions;
export const { addPin, removePin, resetPin } = pinnedSlice.actions;

export function usePinnedSlice() {
	const pinnedLocations = useSelector(
		(state: RootState) => state.pinned.pinnedLocations
	);
	const dispatch = useDispatch();
	// const favoriteLocations = useMemo(
	// 	() =>
	// 		favorite.reduce(
	// 			(acc, { sidoName, stationName }) =>
	// 				acc[sidoName]
	// 					? { ...acc, [sidoName]: [...acc[sidoName], stationName] }
	// 					: { ...acc, [sidoName]: [stationName] },
	// 			{}
	// 		),
	// 	[favorite]
	// );
	// const favoriteSidos = useMemo(
	// 	() => Object.keys(favoriteLocations),
	// 	[favoriteLocations]
	// );

	return {
		pinnedLocations,
		dispatch
	};
}

export default pinnedSlice.reducer;
