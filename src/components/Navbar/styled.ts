import styled from '@emotion/styled';
import { commons } from '../../style/commons';
export const Navbar = styled.nav`
	width: 100%;
	height: 7rem;
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
	width: calc(100% / 3);
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;
