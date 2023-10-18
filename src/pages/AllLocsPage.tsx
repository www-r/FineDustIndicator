import React, { useState, useEffect } from 'react';
import Searchbar from '../components/Searchbar';
import Display from '../components/Display';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import * as S from './styled';
import { getData } from '../utils/api';
import { useLocationSlice, setAllLocation } from '../store/slices/locationSlice';
import { LocationData } from '../interface';

export default function AllLocsPage() {
	const { allLocation } = useLocationSlice();
	const [allLocationsDataArr, setAllLocationsDataArr] = useState<LocationData[]>([]);
	const getAllLocationsDataArr = async () => {
		const res = await getData(allLocation);
		setAllLocationsDataArr(res);
	};
	useEffect(() => {
		getAllLocationsDataArr();
	}, []);
	return (
		<S.Page>
			<Searchbar />
			<Display>
				{allLocationsDataArr.map((locationData) =>
					locationData.pm10Grade && locationData.pm10Value ? (
						<Card
							key={locationData?.stationName}
							sidoName={locationData?.sidoName}
							stationName={locationData?.stationName}
							dataTime={locationData?.dataTime}
							pm10Grade={locationData?.pm10Grade}
							pm10Value={locationData?.pm10Value}
						/>
					) : (
						<></>
					)
				)}
			</Display>
			<Navbar />
		</S.Page>
	);
}
