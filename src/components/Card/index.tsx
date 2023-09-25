import React from 'react';
import * as S from './styled';

export default function Card() {
	return (
		<S.Card>
			<S.SideContainer>
				<S.Address>
					<S.AddressRoad>도산대로</S.AddressRoad>
					<S.AddressCity>서울</S.AddressCity>
				</S.Address>
				<div>
					<span></span>
				</div>
			</S.SideContainer>
			<S.MainContainer>
				<S.FineDustDensity>보통!!!</S.FineDustDensity>
				<S.FineDustRate>
					미세먼지 수치: <span>47</span>
				</S.FineDustRate>
				<S.FineDustMeasureTime>2022-08-12 17:00 기준</S.FineDustMeasureTime>
			</S.MainContainer>
		</S.Card>
	);
}
