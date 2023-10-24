import React, { useState, useEffect } from 'react';
import ListBox from '../ListBox';
import * as S from './styled';
import { useSearchbarSlice } from '../../store/slices/searchbarSlice';
import { setStationArr } from '../../store/slices/searchbarSlice';
import { getSidoData } from '../../utils/api';

export default function Searchbar({ show }) {
	const { sidoName, sidoArr, stationName, stationArr, dispatch } = useSearchbarSlice();
	
	return (
		<S.Searchbar>
			{show ? (
				<>
					<ListBox arr={sidoArr} type="sido" />
					<ListBox arr={stationArr} type="station" />
				</>
			) : (
				<></>
			)}
		</S.Searchbar>
	);
}
