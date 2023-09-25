import React from 'react';
import Display from '../components/Display';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import * as S from './styled';

export default function MyLocPage() {
	return (
		<S.Page>
			<S.Display>
				<ul>
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
				</ul>
			</S.Display>
			<Navbar />
		</S.Page>
	);
}
