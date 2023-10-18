import React, { useState, useEffect } from 'react';
import Display from '../components/Display';
import Searchbar from '../components/Searchbar';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import * as S from './styled';
import { useLocationSlice } from '../store/slices/locationSlice';
import { getStationData } from '../utils/api';
import { LocationData } from '../interface';
export default function MyLocPage() {
	const { myLocation } = useLocationSlice();
	const [myLocationData, setMyLocationData] = useState<LocationData>({
		sidoName: myLocation.sidoName,
		stationName: myLocation.stationName,
		dataTime: '',
		pm10Grade: '',
		pm10Value: '',
	});

	const getMyLocationData = async (stationName) => {
		const res = await getStationData(stationName);
		// console.log('res:', res);
		setMyLocationData({
			dataTime: res.dataTime,
			pm10Grade: res.pm10Grade,
			pm10Value: res.pm10Value,
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
					/>
				}
			</Display>
			<Navbar />
		</S.Page>
	);
}
