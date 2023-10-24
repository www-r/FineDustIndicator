import React, { useState, useEffect } from 'react';
import * as S from './styled';
import { useSearchbarSlice, setSidoName, setStationName, setStationArr } from '../../store/slices/searchbarSlice';
import { getSidoData } from '../../utils/api';
import { sidosArr } from '../../constants/sidosArr';

interface ListBoxProps {
	arr: string[];
	type: 'sido' | 'station';
}
export default function ListBox({ type }: ListBoxProps) {
	const { sidoName, stationName, dispatch } = useSearchbarSlice();
	// const [btnValue, setBtnValue] = useState<string>('');
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [array, setArray] = useState<string[]>([]);

	const getStationArr = async (sidoName) => {
		const res = await getSidoData(sidoName);
		const stationArr = res.map((item) => item.stationName);
		setArray(stationArr);
		dispatch(setStationArr(stationArr));
	};
	const clickListBtn = () => {
		switch (type) {
			case 'sido':
				setArray(sidosArr);
				break;
			case 'station':
				break;
		}
		setIsOpen(!isOpen);
	};
	const clickListItem = async (value) => {
		setIsOpen(!isOpen);
		if (type === 'sido') {
			dispatch(setSidoName(value));
			dispatch(setStationName(''));
		}
		if (type === 'station') {
			dispatch(setStationName(value));
		}
	};
	// useEffect(() => {
	// 	setArray()
	// }, []);
	return (
		<S.ListBoxWrapper>
			<S.ListBoxBtn onClick={clickListBtn}>
				<S.ListBoxValue>{type === 'sido' ? sidoName : stationName}</S.ListBoxValue>
				<S.ListBoxBtnArrow>{isOpen ? '▲' : '▼'}</S.ListBoxBtnArrow>
			</S.ListBoxBtn>
			{isOpen && (
				<S.ListBox>
					{array.map((item) => (
						<S.ListItem key={self.crypto.randomUUID()} onClick={() => clickListItem(item)}>
							{item}
						</S.ListItem>
					))}
				</S.ListBox>
			)}
		</S.ListBoxWrapper>
	);
}
