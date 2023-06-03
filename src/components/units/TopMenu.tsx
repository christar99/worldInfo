import { BsMoon, BsSun } from 'react-icons/bs';
import { setDarkMode } from '@/store/common';
import { useAppDispatch, useAppSelector } from '@/store/index';
import styled from 'styled-components';

const TopMenuContainer = styled.div`
	width: 100%;
	height: 70px;
	display: flex;
	justify-content: end;
`;

const TopMenuArea = styled.div`
	width: 50%;
	height: 100%;
	margin-right: 50px;
	display: flex;
	justify-content: end;
	align-items: center;
	gap: 20px;
	font-size: 3rem;

	:nth-child(n) {
		:hover {
			cursor: pointer;
		}
	}
`;

function TopMenu() {
	const dispatch = useAppDispatch();
	const darkMode = useAppSelector((state) => state.common.darkMode);

	return (
		<TopMenuContainer>
			<TopMenuArea>
				{!darkMode ? (
					<BsSun title="다크테마로 변경하자" onClick={() => dispatch(setDarkMode())} />
				) : (
					<BsMoon title="라이트테마로 변경" onClick={() => dispatch(setDarkMode())} />
				)}
			</TopMenuArea>
		</TopMenuContainer>
	);
}

export default TopMenu;
