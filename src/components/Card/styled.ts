import styled from '@emotion/styled';
import { commons } from '../../style/commons';
export const Card = styled.li`
	box-shadow: 0 0 0 1px rgb(0 0 0 / 7%), 0 2px 4px rgb(0 0 0 / 5%), 0 12px 24px rgb(0 0 0 / 5%);
	border: 1px solid transparent;
	border-radius: 1rem;
	margin: 1rem auto;
	width: 20rem;
	min-width: 10rem;
	height: fit-content;
	display: grid;
	grid-template-rows: 1fr 3fr;
	color: ${commons.color.white};
	/* display: flex;
	flex-direction: column; */
`;
export const SideContainer = styled.div`
	border: 1px solid transparent;
	border-top-right-radius: 1rem;
	border-top-left-radius: 1rem;
	display: flex;
	justify-content: space-between;
	background-color: ${commons.color.white};
	color: ${commons.color.black};
`;
export const MainContainer = styled.div`
	border: 1px solid transparent;
	border-bottom-right-radius: 1rem;
	border-bottom-left-radius: 1rem;
	background-color: ${commons.color.pm10grade1};
	text-align: center;
	padding: 1rem 0;
	/* display: flex;
	flex-direction: column; */
`;
export const Address = styled.div`
	margin: 0.8rem 0 0 0.8rem;
`;
export const AddressRoad = styled.span`
	margin-right: 0.4rem;
	font-size: 1rem;
`;
export const AddressCity = styled.span`
	font-size: 1.3rem;
`;
export const FineDustDensity = styled.h2`
	border: 1px solid transparent;
	border-radius: 1rem;
	font-size: 2.5rem;
	font-weight: ${commons.fontWeight.bold};
	background-color: ${commons.color.white};
	margin: 0 auto;
	padding: 0.5rem 1rem;
	width: fit-content;
	color: ${commons.color.pm10grade1};
`;
export const FineDustRate = styled.p`
	margin-top: 0.8rem;
`;
export const FineDustMeasureTime = styled.p``;
