import styled from '@emotion/styled';
import { commons } from '@/styles/commons';

export const Searchbar = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	background-color: ${commons.color.purple};
	height: 5rem;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;
`;
