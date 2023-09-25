import styled from '@emotion/styled';

export const Navbar = styled.nav`
	width: 100%;
	height: 5rem;
	background-color: red;
	position: absolute;
	bottom: 0;

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
