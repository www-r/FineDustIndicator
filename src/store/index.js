import { configureStore } from '@reduxjs/toolkit';
import { locationSlice } from './slices/locationSlice';
import { pinnedSlice } from './slices/pinnedSlice';
import { searchbarSlice } from './slices/searchbarSlice';
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
		location: locationSlice.reducer,
		pinned: pinnedSlice.reducer,
		searchbar: searchbarSlice.reducer
	}
});
// export const myLocationActions = myLocationSlice.actions;

export default store;
