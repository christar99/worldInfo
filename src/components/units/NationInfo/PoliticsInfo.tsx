import styled from 'styled-components';

const InfoWrap = styled.div``;

const InfoList = styled.p`
	margin-bottom: 10px;
`;

type InfoProps = {
	info: {
		country_eng_nm: string | null;
		country_nm: string | null;
		country_iso_alp2: string | null;
		written_year: number | null;
		politicsys_nm: string | null;
		gvrn_form_nm: string | null;
		council_cn: string | null;
		trtsea_cn: string | null;
		nfs_cn: string | null;
		main_politics_parties_cn: string | null;
		intrntnl_org_mbrshp_join_cn: string | null;
		po_position_nm: string | null;
		po_position_cn: string | null;
	};
};

function PoliticsInfo({ info }: InfoProps) {
	return (
		<InfoWrap>
			{info.politicsys_nm !== null && <InfoList> ▸ 정체명 : {info.politicsys_nm}</InfoList>}
			{info.gvrn_form_nm !== null && <InfoList> ▸ 정부형태명 : {info.gvrn_form_nm}</InfoList>}
			{info.council_cn !== null && <InfoList> ▸ 의회내용 : {info.council_cn}</InfoList>}
			{info.intrntnl_org_mbrshp_join_cn !== null && (
				<InfoList> ▸ 국제기구가입내용 : {info.intrntnl_org_mbrshp_join_cn}</InfoList>
			)}
			{info.nfs_cn !== null && <InfoList> ▸ 국방 : {info.nfs_cn}</InfoList>}
			{info.trtsea_cn !== null && <InfoList> ▸ 영해 : {info.trtsea_cn}</InfoList>}
		</InfoWrap>
	);
}
export default PoliticsInfo;
