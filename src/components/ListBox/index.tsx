import React, { useState } from 'react';
import * as S from './styled';

export default function ListBox({ array }) {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [selectedItem, setSelectedItem] = useState<string>('');

	const clickListItem = (value) => {
		setSelectedItem(value);
		setIsOpen(false);
	};

	return (
		<>
			<S.ListBoxBtn onClick={() => setIsOpen(!isOpen)}>{selectedItem}</S.ListBoxBtn>
			{isOpen && (
				<S.ListBox id={`${array}Select`}>
					{array.map((item) => (
						<S.ListItem onClick={() => clickListItem(item)}>{item}</S.ListItem>
					))}
				</S.ListBox>
			)}
		</>
	);
}
