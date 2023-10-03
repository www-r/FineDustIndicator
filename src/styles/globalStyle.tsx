import React from 'react';
import { Global, css } from '@emotion/react';

function GlobalStyle() {
	return <Global styles={styles} />;
}
export default GlobalStyle;

const styles = css`
	html,
	body,
	div,
	span,
	applet,
	object,
	iframe,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	blockquote,
	pre,
	a,
	abbr,
	acronym,
	address,
	big,
	cite,
	code,
	del,
	dfn,
	em,
	img,
	ins,
	kbd,
	q,
	s,
	samp,
	small,
	strike,
	strong,
	sub,
	sup,
	tt,
	var,
	b,
	u,
	i,
	center,
	dl,
	dt,
	dd,
	ol,
	ul,
	li,
	fieldset,
	form,
	label,
	legend,
	table,
	caption,
	tbody,
	tfoot,
	thead,
	tr,
	th,
	td,
	article,
	aside,
	canvas,
	details,
	embed,
	figure,
	figcaption,
	footer,
	header,
	hgroup,
	menu,
	nav,
	output,
	ruby,
	section,
	summary,
	time,
	mark,
	audio,
	input,
	textarea,
	video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
		box-sizing: border-box;
	}
	html {
		@font-face {
			font-family: 'Pretendard-Regular';
			src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
			font-weight: 400;
			font-style: normal;
		}
		body {
		}
		font-family: 'Pretendard-Regular', 'Noto Sans KR', 'sans-serif';
		line-height: 1.5;
		margin: 0 auto;
		width: 393px;
		height: 852px;
		font-family: 'Pretendard-Regular';
		background-color: #e5e5e5;
	}
	ol,
	ul {
		list-style: none;
	}
	a {
		background-color: transparent;
		text-decoration: none;
		outline: none;
		color: inherit;
		&:active,
		&:hover {
			text-decoration: none;
			color: inherit;
			outline: 0;
		}
	}
	button {
		display: flex;
		align-items: center;
		justify-content: center;
		outline: none;
		border: none;
		background: none;
		padding: 0;
		user-select: none;
		cursor: pointer;
		white-space: nowrap;
		letter-spacing: inherit;
		font: inherit;
		color: inherit;
	}
	input {
		outline: none;
	}
`;
