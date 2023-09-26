import React from 'react';
import Display from '../components/Display';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import * as S from './styled';

export default function MyLocPage() {
	return (
		<S.Page>
			<Display>
				<ul>
					<Card />
				</ul>
			</Display>
			<Navbar />
		</S.Page>
	);
}
