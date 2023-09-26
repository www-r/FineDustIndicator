import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styled';
import IconPin from '../../assets/IconPin';
import IconMap from '../../assets/IconMap';
import IconBookmarkEmpty from '../../assets/IconBookmarkEmpty';
export default function Navbar() {
	return (
		<S.Navbar>
			<ul>
				<S.NavbarItem>
					<Link to="/">{IconPin}</Link>
				</S.NavbarItem>
				<S.NavbarItem>
					<Link to="/allLocations">{IconMap}</Link>
				</S.NavbarItem>
				<S.NavbarItem>
					<Link to="pinnedLocations">{IconBookmarkEmpty}</Link>
				</S.NavbarItem>
			</ul>
		</S.Navbar>
	);
}
