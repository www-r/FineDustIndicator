import React from 'react';
import * as S from './styled';

export default function Navbar() {
	return (
		<S.Navbar>
			<ul>
				<S.NavbarItem>내 지역보기</S.NavbarItem>
				<S.NavbarItem>전체 시도보기</S.NavbarItem>
				<S.NavbarItem>즐겨찾기</S.NavbarItem>
			</ul>
		</S.Navbar>
	);
}
