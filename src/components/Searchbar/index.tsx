import React, { useState, useEffect } from 'react';
import ListBox from '../ListBox';
import * as S from './styled';
import { useSearchbarSlice } from '../../store/slices/searchbarSlice';
import { setStationArr } from '../../store/slices/searchbarSlice';
import { getSidoData } from '../../utils/api';

export default function Searchbar({ show }) {
	const { sidoName, sidoArr, stationName, stationArr, dispatch } =
		useSearchbarSlice();
	const getStationArr = async (sidoName: string) => {
		const res = await getSidoData(sidoName);
		const stationArr = res.map(item => item.stationName);
		dispatch(setStationArr(stationArr));
	};
	useEffect(() => {
		getStationArr(sidoName);
	}, [sidoName]);

	return (
		<S.Searchbar>
			{show ? (
				<>
					<ListBox type='sido' />
					<ListBox type='station' />
				</>
			) : (
				<></>
			)}
		</S.Searchbar>
	);
}
