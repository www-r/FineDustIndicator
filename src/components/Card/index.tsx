import React, { useState } from 'react';
import * as S from './styled';
import IconBookmarkEmpty from '../../assets/IconBookmarkEmpty';
import IconBookmark from '../../assets/IconBookmark';
import { LocationData } from '../../interface';

export default function Card({ sidoName, stationName, dataTime, pm10Grade, pm10Value }: LocationData) {
	const [isBookmarked, setIsBookmarked] = useState(false);
	const getPm10GradeString = (pm10Grade) => {
		switch (pm10Grade) {
			case '1':
				return '좋음';
			case '2':
				return '보통';
			case '3':
				return '한때나쁨';
			case '4':
				return '나쁨';
			case '5':
				return '매우나쁨';
		}
	};
	const clickBookmarkBtn = () => {
		if(isBookmarked){
			
		}
		if(!isBookmarked){

		}
		setIsBookmarked(!isBookmarked);
	};
	return (
		<S.Card>
			<S.SideContainer>
				<S.Address>
					<S.AddressCity>{sidoName}</S.AddressCity>
					<S.AddressRoad>{stationName}</S.AddressRoad>
				</S.Address>
				<button onClick={clickBookmarkBtn}>{isBookmarked ? IconBookmark : IconBookmarkEmpty}</button>
			</S.SideContainer>
			<S.MainContainer className={`grade${pm10Grade}`}>
				<S.FineDustDensity className={`grade${pm10Grade}`}>{getPm10GradeString(pm10Grade)}</S.FineDustDensity>
				<S.FineDustRate>
					미세먼지 수치: <span>{pm10Value}</span>
				</S.FineDustRate>
				<S.FineDustMeasureTime>{dataTime} 기준</S.FineDustMeasureTime>
			</S.MainContainer>
		</S.Card>
	);
}
