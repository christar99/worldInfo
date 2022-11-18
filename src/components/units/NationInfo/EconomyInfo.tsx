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
		written_year: number | null;
		gdp: string | null;
		gdp_per_capita: string | null;
		gdp_src: string | null;
		ctypln_policy_cn: string | null;
		main_resource_cn: string | null;
		main_indust_cn: string | null;
		ecnmy_growth_rate: number | null;
		infltn_rate: number | null;
		unemploy_rate: string | null;
		unemploy_rate_year: string | null;
		ext_debt: string | null;
		foreign_currency_reserve: string | null;
		remark: string | null;
		trade_year: number | null;
		trade_export_prdnm_cn: string | null;
		trade_income_prdnm_cn: string | null;
		invt_sts_cn: string | null;
		oda_sts_cn: string | null;
		pltcl_state_cn: string | null;
		export_amount: number | null;
		income_amount: number | null;
		export_amount_src: string | null;
		income_amount_src: string | null;
	};
};

function EconomyInfo({ info }: infoProps) {
	return (
		<InfoWrap>
			{info.gdp !== null && <InfoList> ▸ 국가 GDP : {info.gdp} $</InfoList>}
			{info.gdp_per_capita !== null && (
				<InfoList>
					{' '}
					▸ 1인당 GDP : {info.gdp_per_capita}$ {info.gdp_src}
				</InfoList>
			)}
			{info.ecnmy_growth_rate !== null && (
				<InfoList> ▸ 경제성장률 : {info.ecnmy_growth_rate}%</InfoList>
			)}
			{info.infltn_rate !== null && <InfoList> ▸ 물가상승률 : {info.infltn_rate}%</InfoList>}
			{info.unemploy_rate !== null && (
				<InfoList>
					{' '}
					▸ 실업률 : {info.unemploy_rate}% (${info.unemploy_rate_year})
				</InfoList>
			)}
			{info.main_resource_cn !== null && (
				<InfoList> ▸ 주요자원 : {info.main_resource_cn}</InfoList>
			)}
			{info.main_indust_cn !== null && (
				<InfoList> ▸ 주요산업 : {info.main_indust_cn}</InfoList>
			)}
			{info.trade_export_prdnm_cn !== null && (
				<InfoList> ▸ 무역수출품 내용 : {info.trade_export_prdnm_cn}</InfoList>
			)}
			{info.trade_income_prdnm_cn !== null && (
				<InfoList> ▸ 무역수입품 내용 : {info.trade_income_prdnm_cn}</InfoList>
			)}
			{info.infltn_rate !== null && (
				<InfoList>
					{' '}
					▸ 수출총액 : {info.infltn_rate}(${info.export_amount_src})
				</InfoList>
			)}
			{info.infltn_rate !== null && (
				<InfoList>
					{' '}
					▸ 수입총액 : {info.infltn_rate}(${info.income_amount_src})
				</InfoList>
			)}
			{info.ext_debt !== null && <InfoList> ▸ 외채 : {info.ext_debt}</InfoList>}
			{info.foreign_currency_reserve !== null && (
				<InfoList>
					{' '}
					▸ 외한보유고 : {info.foreign_currency_reserve.toLocaleString()}
				</InfoList>
			)}
			{![null, ''].includes(info.invt_sts_cn) && (
				<InfoList> ▸ 투자현황 : {info.invt_sts_cn}</InfoList>
			)}
			{info.remark !== null && <InfoList> ▸ 비고 : {info.remark}</InfoList>}
		</InfoWrap>
	);
}
export default EconomyInfo;
