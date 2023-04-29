import { useMemo, useEffect, useState } from 'react';
import { useMatch } from 'react-router-dom';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '@/store/index';
import { worldInfoApi } from '@/api/worldInfoApi';
import GeneralInfo from '@/components/units/NationInfo/GeneralInfo';
import EconomyInfo from '@/components/units/NationInfo/EconomyInfo';
import PoliticsInfo from '@/components/units/NationInfo/PoliticsInfo';
import { loading } from '@/store/common';

const NationContainer = styled.div`
	margin-left: 20%;
`;

const CounteyName = styled.div`
	display: inline-block;
	font-size: 4rem;
	margin-bottom: 20px;
`;

const EnglishName = styled.span`
	font-size: 3rem;
`;

const InfoContainer = styled.div`
	min-width: 50%;
	max-width: 65%;
	display: flex;
	justify-content: space-between;
`;

const NationInfo = styled.div`
	min-width: 50%;
	max-width: 65%;
`;

const TapMenu = styled.div`
	display: flex;
`;

const Tap = styled.div<{ active: boolean }>`
	font-size: 2.5rem;
	padding: 10px 20px;
	border: ${(props) => props.theme.border};
	background-color: ${(props) => props.active && props.theme.activeColor};

	:hover {
		cursor: pointer;
	}
`;

const InfoArea = styled.div`
	width: 100%;
	border: ${(props) => props.theme.border};
	font-size: 2rem;
	padding: 20px;
`;

const NationFlag = styled.img`
	width: 150px;
	height: auto;
`;

function Nations() {
	const dispatch = useAppDispatch();
	const match = useMatch('nation/:id');
	const nationList = useAppSelector((state) => state.nationList);
	const nationInfo = useAppSelector((state) => state.nationInfo);
	const { flagImage } = nationInfo;
	const { generalInfo } = nationInfo;
	const { econymyInfo } = nationInfo;
	const { politicsInfo } = nationInfo;
	const { status } = nationInfo;
	const [tapMenu, changeTapMenu] = useState<string>('general');

	const country = useMemo(() => {
		if (match !== null) {
			return nationList.nations.find((nation) => nation?.idx === Number(match.params.id));
		}
	}, [nationList, match]);

	useEffect(() => {
		if (country !== undefined) {
			dispatch(worldInfoApi.getNationFlag(country.code));
			dispatch(worldInfoApi.getNationGeneralInfo(country.code));
			dispatch(worldInfoApi.getNationEconomyInfo(country.code));
			dispatch(worldInfoApi.getNationPoliticsInfo(country.code));
		}
	}, [country, dispatch]);

	useEffect(() => {
		if (status === 'pending') {
			dispatch(loading(true));
		} else {
			dispatch(loading(false));
		}
	}, [status, dispatch]);

	return (
		<NationContainer>
			<InfoContainer>
				{generalInfo !== undefined && (
					<CounteyName>
						{generalInfo.country_nm}
						<EnglishName>({generalInfo.country_eng_nm})</EnglishName>
					</CounteyName>
				)}
				{flagImage !== null && <NationFlag src={flagImage} />}
			</InfoContainer>

			<NationInfo>
				<TapMenu>
					<Tap active={tapMenu === 'general'} onClick={() => changeTapMenu('general')}>
						일반정보
					</Tap>
					<Tap active={tapMenu === 'economy'} onClick={() => changeTapMenu('economy')}>
						경제정보
					</Tap>
					<Tap active={tapMenu === 'politics'} onClick={() => changeTapMenu('politics')}>
						정치정보
					</Tap>
				</TapMenu>
				<InfoArea>
					{tapMenu === 'general' && <GeneralInfo info={generalInfo} />}
					{tapMenu === 'economy' && <EconomyInfo info={econymyInfo} />}
					{tapMenu === 'politics' && <PoliticsInfo info={politicsInfo} />}
				</InfoArea>
			</NationInfo>
		</NationContainer>
	);
}

export default Nations;
