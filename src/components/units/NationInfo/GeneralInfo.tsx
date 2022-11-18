import styled from 'styled-components';

const InfoWrap = styled.div``;

const InfoList = styled.p`
	margin-bottom: 10px;
`;

type infoProps = {
	info: {
		country_nm: string | null;
		country_eng_nm: string | null;
		country_iso_alp2: string | null;
		capital: string | null;
		population: string | null;
		population_desc: string | null;
		area: string | null;
		area_desc: string | null;
		lang: string | null;
		religion: string | null;
		ethnic: string | null;
		climate: string | null;
		establish: string | null;
	};
};
function GeneralInfo({ info }: infoProps) {
	return (
		<InfoWrap>
			{info.capital !== null && <InfoList> ▸ 수도 : {info.capital} </InfoList>}
			{info.population !== null && <InfoList> ▸ 인구 : {Number(info.population).toLocaleString()}명 </InfoList>}
			{info.lang !== null && <InfoList> ▸ 언어 : {info.lang} </InfoList>}
			{info.area !== null && (
				<InfoList>
					{' '}
					▸ 면적 : {Number(info.area).toLocaleString()} km² {info.area_desc}{' '}
				</InfoList>
			)}
			{info.religion !== null && <InfoList> ▸ 종교 : {info.religion} </InfoList>}
			{info.ethnic !== null && <InfoList> ▸ 민족 : {info.ethnic} </InfoList>}
			{info.climate !== null && <InfoList> ▸ 기후 : {info.climate} </InfoList>}
			{info.establish !== null && <InfoList> ▸ 건국 : {info.establish} </InfoList>}
		</InfoWrap>
	);
}
export default GeneralInfo;
