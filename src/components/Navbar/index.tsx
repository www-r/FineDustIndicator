import React from 'react';
import * as S from './styled';
import IconPin from '../../assets/IconPin';
import IconMap from '../../assets/IconMap';
import IconBookmark from '../../assets/IconBookmark';
export default function Navbar() {
	return (
		<S.Navbar>
			<ul>
				<S.NavbarItem>{IconPin}</S.NavbarItem>
				<S.NavbarItem>{IconMap}</S.NavbarItem>
				<S.NavbarItem>{IconBookmark}</S.NavbarItem>
			</ul>
		</S.Navbar>
	);
}
