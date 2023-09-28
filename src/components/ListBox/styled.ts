import styled from '@emotion/styled';

export const ListBoxWrapper = styled.div`
	position: relative;
`;
export const ListBoxBtn = styled.button`
	border-radius: 3px;
	width: 40vw;
	height: 2.5rem;
	background-color: #fff;
	position: relative;
`;
export const ListBoxValue = styled.span``;
export const ListBoxBtnArrow = styled.span`
	position: absolute;
	right: 1rem;
`;
export const ListBox = styled.ul`
	position: absolute;
	bottom: -11rem;
	border-radius: 3px;
	width: 40vw;
	height: 10rem;
	overflow: auto;
	background-color: #fff;
`;
export const ListItem = styled.li`
	border: 1px solid transparent;
	background-color: transparent;

	height: 2.5rem;
	display: flex;
	align-items: center;
	&:hover {
		border: 1px solid black;
		background-color: gray;
	}
`;
