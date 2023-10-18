import React, { useState } from 'react';
import * as S from './styled';
import { useLocationSlice, setMyLocation, setAllLocation } from '../../store/slices/locationSlice';
interface ListBoxProps {
	array: string[];
	type: 'sido' | 'station';
}
export default function ListBox({ array, type }: ListBoxProps) {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [value, setValue] = useState('');
	const { allLocation, dispatch } = useLocationSlice();
	const clickListBtn = () => {
		setIsOpen(!isOpen);
	};
	const clickListItem = (value) => {
		setValue(value);
		setIsOpen(!isOpen);
		if (type === 'sido') {
			dispatch(setAllLocation({ sidoName: value, stationName: allLocation.stationName }));
		} else if (type === 'station') {
			dispatch(setAllLocation({ sidoName: allLocation.sidoName, stationName: value }));
		}
	};
	return (
		<S.ListBoxWrapper>
			<S.ListBoxBtn onClick={clickListBtn}>
				<S.ListBoxValue>{value}</S.ListBoxValue>
				<S.ListBoxBtnArrow>{isOpen ? '▲' : '▼'}</S.ListBoxBtnArrow>
			</S.ListBoxBtn>
			{isOpen && (
				<S.ListBox>
					{array.map((item) => (
						<S.ListItem onClick={() => clickListItem(item)}>{item}</S.ListItem>
					))}
				</S.ListBox>
			)}
		</S.ListBoxWrapper>
	);
}
