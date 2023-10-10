import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialMyLocationState = { sidoName: '', stationName: '' };
const initialFavLocationsState = []
const myLocationSlice = createSlice({
	name: 'myLocationSlice',
	initialState: initialMyLocationState,
	reducers: {
		update(state, action) {
			state.myLocation = action.myLocation;
		},
		reset(state) {
			state.myLocation = { sidoName: '', stationName: '' };
		}
	}
});
const favLocationsSlice = createSlice({
	name: 'favLocationsSlice',
	initialState: initialFavLocationsState,
	reducers: {
		add(state, action) {
			state.favLocations = [
				...state.favLocations,
				action.favLocation
			];
		},
		remove(state, action) {
			state.favLocations = state.favLocations.filter(
				item => item !== action.favLocation
			);
		},
		reset(state){
			state.favLocations = []
		}
	}
});
const store = configureStore({
	reducer: {
		myLocationSlice,
		favLocationsSlice,	}
});
export const myLocationActions = myLocationSlice.actions;
export const favLocationsActions = favLocationsSlice.actions;
export default store;
