import React from 'react';
import Display from '@/components/Display';
import Searchbar from '@/components/Searchbar';
import Card from '@/components/Card';
import Navbar from '@/components/Navbar';
import * as S from './styled';

export default function MyLocPage() {
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
