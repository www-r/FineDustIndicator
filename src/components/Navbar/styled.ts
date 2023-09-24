import styled from '@emotion/styled';

export const Navbar = styled.nav`
	width: 100%;
	height: 5rem;
	bottom: 0;
	background-color: red;
	ul {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
`;
export const NavbarItem = styled.li`
	width: calc(100% / 3);
	height: 100%;
`;
