import React, { useState, useEffect } from 'react';
import Searchbar from '../components/Searchbar';
import Display from '../components/Display';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import * as S from './styled';
import { getSidoData } from '../utils/api';
import { useLocationSlice, setAllLocation } from '../store/slices/locationSlice';
import { LocationData } from '../interface';

export default function AllLocsPage() {
	const [dataArr, setDataArr] = useState<LocationData[]>([]);
	const { allLocation } = useLocationSlice();
	const getAllLocationDataArr = async () => {
		const res = await getSidoData(allLocation.sidoName);
		setDataArr(res);
	};
	const filterStationArr = () => {
		const filteredArr = dataArr.filter((item) => item.stationName === allLocation.stationName);
		setDataArr(filteredArr);
	};
	useEffect(() => {
		getAllLocationDataArr();
	}, [allLocation.sidoName]);
	useEffect(() => {
		filterStationArr();
	}, [allLocation.stationName]);
	return (
		<S.Page>
			<Searchbar show />
			<Display>
				{dataArr.map((locationData) =>
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
