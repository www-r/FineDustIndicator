import React, { useState, useEffect } from 'react';
import * as S from './styled';
import {
	useSearchbarSlice,
	setSidoName,
	setStationName,
	setStationArr
} from '../../store/slices/searchbarSlice';
import { getSidoData } from '../../utils/api';
import { sidosArr } from '../../constants/sidosArr';

interface ListBoxProps {
	type: 'sido' | 'station';
}
export default function ListBox({ type }: ListBoxProps) {
	const { sidoName, stationName, dispatch } = useSearchbarSlice();
	const [btnValue, setBtnValue] = useState<string>('');
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [array, setArray] = useState<string[]>([]);

	const getStationArr = sidoName => {
		const res = await getSidoData(sidoName);
		const stationArr = res.map(item => item.stationName);
		setArray(stationArr);
	};
	const clickListBtn = () => {
		setIsOpen(!isOpen);
		switch (type) {
			case 'sido':
				setArray(sidosArr);
				
				break;
			case 'station':
				getStationArr(sidoName);
				break;
		}
	};
	const clickListItem = async value => {
		setIsOpen(!isOpen);
		if (type === 'sido') {
			dispatch(setSidoName(value));
			dispatch(setStationName(''));
			
		}
		if (type === 'station') {
			if (!value) {
				const res = await getSidoData(sidoName);
				const stationArr = res.map(item => item.stationName);
				dispatch(setStationArr(stationArr));
			} else {
				dispatch(setStationName(value));
			}
		}
	};
	useEffect(() => {
		switch (type) {
			case 'sido':
				setBtnValue(sidoName);
				break;
			case 'station':
				setBtnValue(stationName);
				break;
		}
	}, []);
	return (
		<S.ListBoxWrapper>
			<S.ListBoxBtn onClick={clickListBtn}>
				<S.ListBoxValue>{btnValue}</S.ListBoxValue>
				<S.ListBoxBtnArrow>{isOpen ? '▲' : '▼'}</S.ListBoxBtnArrow>
			</S.ListBoxBtn>
			{isOpen && (
				<S.ListBox>
					{array.map(item => (
						<S.ListItem onClick={() => clickListItem(item)}>{item}</S.ListItem>
					))}
				</S.ListBox>
			)}
		</S.ListBoxWrapper>
	);
}
