import styled from '@emotion/styled';

export const ListBoxWrapper = styled.div`
	position: relative;
`;
export const ListBoxBtn = styled.button`
	border-radius: 3px;
	width: 40vw;
	height: 2rem;
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
	background-color: rgba(255, 255, 255, 0.8);
`;
export const ListItem = styled.li`
	border: 1px solid transparent;
	background-color: transparent;
	height: 2.5rem;
	display: flex;
	align-items: center;
	justify-content: center;
	&:hover {
		/* border: 1px solid black; */
		background-color: rgba(0, 0, 0, 0.2);
	}
`;
