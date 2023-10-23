import React, { useState, useEffect } from 'react';
import Display from '../components/Display';
import Searchbar from '../components/Searchbar';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import * as S from './styled';
import { useLocationSlice } from '../store/slices/locationSlice';
import { getStationData } from '../utils/api';
import { MyLocation } from '../type';

export default function MyLocPage() {
	const { myLocation } = useLocationSlice();
	const [myLocationData, setMyLocationData] = useState<MyLocation>({
		sidoName: myLocation.sidoName,
		stationName: myLocation.stationName,
		dataTime: '',
		pm10Grade: '',
		pm10Value: '',
		isPinned: false
	});

	const getMyLocationData = async stationName => {
		const res = await getStationData(stationName);
		setMyLocationData({
			sidoName: res.sidoName,
			stationName: res.stationName,
			dataTime: res.dataTime,
			pm10Grade: res.pm10Grade,
			pm10Value: res.pm10Value,
			isPinned: myLocation.isPinned
		});
	};

	useEffect(() => {
		getMyLocationData(myLocation.stationName);
	}, []);

	return (
		<S.Page>
			<Searchbar show={false} />
			<Display>
				{
					<Card
						sidoName={myLocation.sidoName}
						stationName={myLocation.stationName}
						dataTime={myLocationData.dataTime}
						pm10Grade={myLocationData.pm10Grade}
						pm10Value={myLocationData.pm10Value}
						isPinned={myLocationData.isPinned}
					/>
				}
			</Display>
			<Navbar />
		</S.Page>
	);
}
