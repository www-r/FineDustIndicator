import React, { useState, useEffect, useId } from 'react';
import Searchbar from '../components/Searchbar';
import Display from '../components/Display';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import * as S from './styled';
import { getSidoData } from '../utils/api';
import { useLocationSlice } from '../store/slices/locationSlice';
import { LocationData } from '../type';

export default function AllLocsPage() {
	const [dataArr, setDataArr] = useState<LocationData[]>([]);
	const { allLocation } = useLocationSlice();

	const getAllLocationDataArr = async () => {
		const res = await getSidoData(allLocation.sidoName);
		setDataArr(res);
	};

	useEffect(() => {
		getAllLocationDataArr();
	}, [allLocation.sidoName]);

	return (
		<S.Page>
			<Searchbar show />
			<Display>
				{dataArr.map((locationData) => (
					<Card
						key={self.crypto.randomUUID()}
						sidoName={locationData.sidoName}
						stationName={locationData.stationName}
						dataTime={locationData.dataTime}
						pm10Grade={locationData.pm10Grade}
						pm10Value={locationData.pm10Value}
						isPinned={locationData.isPinned}
					/>
				))}
			</Display>
			<Navbar />
		</S.Page>
	);
}
