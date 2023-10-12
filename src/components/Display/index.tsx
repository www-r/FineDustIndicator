import React from 'react';
import * as S from './styled';

export default function Display({ children }) {
	return (
		<S.Display>
			<S.ListWrapper>{children}</S.ListWrapper>
		</S.Display>
	);
}
