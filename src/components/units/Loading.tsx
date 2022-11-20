import styled from 'styled-components';

const LoadingWrap = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	font-size: 3rem;
`;

function Loading() {
	return (
		<LoadingWrap>
			<div>WorldInfo</div>
		</LoadingWrap>
	);
}

export default Loading;
