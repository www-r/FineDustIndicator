import { configureStore } from '@reduxjs/toolkit';
import { locationSlice } from './slices/locationSlice';
import {favLocationsSlice} from './slices/favoriteSlice'

// const initialMyLocationState = { sidoName: '', stationName: '' };
// const initialFavLocationsState = [];
// const myLocationSlice = createSlice({
// 	name: 'myLocationSlice',
// 	initialState: initialMyLocationState,
// 	reducers: {
// 		update(state, action) {
// 			state.myLocation = action.payload;
// 		},
// 		reset(state) {
// 			state.myLocation = { sidoName: '', stationName: '' };
// 		}
// 	}
// });

const store = configureStore({
	reducer: {
		// myLocationSlice,
		locationSlice,
		favLocationsSlice
	}
});
// export const myLocationActions = myLocationSlice.actions;

export default store;
