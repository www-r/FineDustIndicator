import React , {useState} from 'react';
import Display from '@/components/Display';
import Searchbar from '@/components/Searchbar';
import Card from '@/components/Card';
import Navbar from '@/components/Navbar';
import * as S from './styled';
import { getData } from '../utils/api';
import { getDate } from '../utils/getDate';
export default function MyLocPage() {

	// navigator.geolocation.getCurrentPosition((data: GeolocationPosition) => {
	// 	const { latitude, longitude } = data.coords;
	// 	console.log(latitude, longitude);
	// });
	getData(getDate(), '서울');

	return (
		<S.Page>
			<Searchbar />
			<Display>
				<ul>
					<Card />
				</ul>
			</Display>
			<Navbar />
		</S.Page>
	);
}
