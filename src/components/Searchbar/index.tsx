import React, { useState, useEffect } from 'react';
import ListBox from '../ListBox';
import * as S from './styled';
import { sidosArr } from '../../constants/sidosArr';
import { useLocationSlice } from '../../store/slices/locationSlice';
import { useStationSlice, setStationArr } from '../../store/slices/stationSlice';
import { getSidoData } from '../../utils/api';
export default function Searchbar({ show }) {
	const [arr, setArr] = useState([]);
	const { allLocation, dispatch } = useLocationSlice();
	const { stationArr } = useStationSlice();
	const getStations = async () => {
		const res = await getSidoData(allLocation.sidoName);
		const stationArr = res.map((item) => item.stationName);
		setArr(stationArr);
		dispatch(setStationArr(stationArr));
		console.log(stationArr);
	};
	useEffect(() => {
		getStations();
	}, [allLocation.sidoName]);

	return (
		<S.Searchbar>
			{show ? (
				<>
					<ListBox array={sidosArr} type="sido" />
					<ListBox array={arr} type="station" />
				</>
			) : (
				<></>
			)}
		</S.Searchbar>
	);
}
