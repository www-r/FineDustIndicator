import styled from '@emotion/styled';
import { commons } from '../../styles/commons';

export const Navbar = styled.nav`
	width: 100%;
	height: fit-content;
	background-color: ${commons.color.purple};
	position: fixed;
	bottom: 0;
	right: 0;
	ul {
		height: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
`;
export const NavbarItem = styled.li`
	padding-top: 0.5rem;
	width: calc(100% / 3);
	display: flex;
	justify-content: center;
	align-items: center;
`;
