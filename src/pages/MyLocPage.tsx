import React, { useState, useEffect } from 'react';
import Display from '../components/Display';
import Searchbar from '../components/Searchbar';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import * as S from './styled';
import { useLocationSlice} from '../store/slices/locationSlice';
import { getData } from '../utils/api';
import { LocationData } from '../interface';
export default function MyLocPage() {
	const { myLocation} = useLocationSlice();
	const [myLocationData, setMyLocationData] = useState<LocationData>({
		sidoName: myLocation.sidoName,
		stationName: myLocation.stationName,
		dataTime: '',
		pm10Grade: '',
		pm10Value: '',
	});

	const getMyLocationData = async (myLocation) => {
		const res = await getData(myLocation.sidoName); //배열
		console.log('myLocation:', myLocation);
		console.log('res:', res);
		const myLocData = res.find((item) => {
			console.log('find:', item);
			return item.stationName === myLocation.stationName;
		});
		console.log('myLocData:', myLocData);
		// dispatch(setMyLocation(myLocData));
		setMyLocationData(myLocData);
	};

	useEffect(() => {
		getMyLocationData(myLocation);
	}, []);

	return (
		<S.Page>
			<Searchbar />
			<Display>
				{
					<Card
						sidoName={myLocationData.sidoName}
						stationName={myLocationData.stationName}
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
