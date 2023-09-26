import React from 'react';
import ListBox from '../ListBox';
import * as S from './styled';
export default function Searchbar() {
	const sidosArr = [
		'서울',
		'부산',
		'대구',
		'인천',
		'광주',
		'대전',
		'울산',
		'경기',
		'강원',
		'충북',
		'충남',
		'전북',
		'전남',
		'경북',
		'경남',
		'제주',
		'세종',
	];
	return <S.Searchbar>{<ListBox array={sidosArr} />}</S.Searchbar>;
}
