import React from 'react';
import Searchbar from '@/components/Searchbar';
import Display from '@/components/Display';
import Card from '@/components/Card';
import Navbar from '@/components/Navbar';
import * as S from './styled';
export default function AllLocsPage() {
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
