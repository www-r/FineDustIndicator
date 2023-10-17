import React, { useState } from 'react';
import * as S from './styled';
import { sidosArr } from '../../constants/sidosArr';
import { useLocationSlice, setMyLocation, setAllLocation } from '../../store/slices/locationSlice';

export default function ListBox({array = sidosArr}) {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const { myLocation, allLocation, dispatch } = useLocationSlice();
	const clickListBtn = () => {
		setIsOpen(!isOpen);
	};
	const clickListItem = (sido) => {
		dispatch(setAllLocation(sido));
		setIsOpen(!isOpen);
	};
	return (
		<S.ListBoxWrapper>
			<S.ListBoxBtn onClick={clickListBtn}>
				<S.ListBoxValue>{allLocation.sidoName}</S.ListBoxValue>
				<S.ListBoxBtnArrow>{isOpen ? '▲' : '▼'}</S.ListBoxBtnArrow>
			</S.ListBoxBtn>
			{isOpen && (
				<S.ListBox>
					{array.map((sido) => (
						<S.ListItem onClick={() => clickListItem(sido)}>{sido}</S.ListItem>
					))}
				</S.ListBox>
			)}
		</S.ListBoxWrapper>
	);
}
