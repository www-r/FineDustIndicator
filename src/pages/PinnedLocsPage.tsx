import React, { useState, useEffect } from 'react';
import Searchbar from '../components/Searchbar';
import Display from '../components/Display';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import * as S from './styled';
import { resetPin, usePinnedSlice } from '../store/slices/pinnedSlice';


export default function PinnedLocsPage() {
	const { pinnedLocations} = usePinnedSlice();

	return (
		<S.Page>
			<Searchbar show={false} />
			<Display>
				{pinnedLocations.map(element => (
					<Card
						sidoName={element.sidoName}
						stationName={element.stationName}
						dataTime={element.dataTime}
						pm10Grade={element.pm10Grade}
						pm10Value={element.pm10Value}
						isPinned={element.isPinned}
					/>
				))}
			</Display>
			<Navbar />
		</S.Page>
	);
}
