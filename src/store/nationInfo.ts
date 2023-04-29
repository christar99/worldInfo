import { createSlice } from '@reduxjs/toolkit';
import { worldInfoApi } from '@/api/worldInfoApi';

interface NationGeneralInfoState {
	status: string;
	flagImage: string | null;
	generalInfo: {
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
	econymyInfo: {
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
	politicsInfo: {
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
}

const initialState: NationGeneralInfoState = {
	status: '',
	flagImage: null,
	generalInfo: {
		country_nm: null,
		country_eng_nm: null,
		country_iso_alp2: null,
		capital: null,
		population: null,
		population_desc: null,
		area: null,
		area_desc: null,
		lang: null,
		religion: null,
		ethnic: null,
		climate: null,
		establish: null,
	},
	econymyInfo: {
		country_nm: null,
		country_eng_nm: null,
		country_iso_alp2: null,
		written_year: null,
		gdp: null,
		gdp_per_capita: null,
		gdp_src: null,
		ctypln_policy_cn: null,
		main_resource_cn: null,
		main_indust_cn: null,
		ecnmy_growth_rate: null,
		infltn_rate: null,
		unemploy_rate: null,
		unemploy_rate_year: null,
		ext_debt: null,
		foreign_currency_reserve: null,
		remark: null,
		trade_year: null,
		trade_export_prdnm_cn: null,
		trade_income_prdnm_cn: null,
		invt_sts_cn: null,
		oda_sts_cn: null,
		pltcl_state_cn: null,
		export_amount: null,
		income_amount: null,
		export_amount_src: null,
		income_amount_src: null,
	},
	politicsInfo: {
		country_eng_nm: null,
		country_nm: null,
		country_iso_alp2: null,
		written_year: null,
		politicsys_nm: null,
		gvrn_form_nm: null,
		council_cn: null,
		trtsea_cn: null,
		nfs_cn: null,
		main_politics_parties_cn: null,
		intrntnl_org_mbrshp_join_cn: null,
		po_position_nm: null,
		po_position_cn: null,
	},
};

export const nationInfo = createSlice({
	name: 'getWorldInfo',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			//국기이미지
			.addCase(worldInfoApi.getNationFlag.pending, (state) => {
				state.status = 'pending';
			})
			.addCase(worldInfoApi.getNationFlag.fulfilled, (state, action) => {
				state.status = 'complete';
				if (action.payload.data !== undefined) {
					state.flagImage = action.payload.data.data[0].download_url;
				}
			})
			.addCase(worldInfoApi.getNationFlag.rejected, (state) => {
				state.status = 'error';
			})
			//일반정보
			.addCase(worldInfoApi.getNationGeneralInfo.pending, (state) => {
				state.status = 'pending';
			})
			.addCase(worldInfoApi.getNationGeneralInfo.fulfilled, (state, action) => {
				state.status = 'complete';
				if (action.payload.data !== undefined) {
					state.generalInfo = action.payload.data.data[0];
				}
			})
			.addCase(worldInfoApi.getNationGeneralInfo.rejected, (state) => {
				state.status = 'error';
			})
			//경제정보
			.addCase(worldInfoApi.getNationEconomyInfo.pending, (state) => {
				state.status = 'pending';
			})
			.addCase(worldInfoApi.getNationEconomyInfo.fulfilled, (state, action) => {
				state.status = 'complete';
				if (action.payload.data !== undefined) {
					state.econymyInfo = action.payload.data.data[0];
				}
			})
			.addCase(worldInfoApi.getNationEconomyInfo.rejected, (state) => {
				state.status = 'error';
			})
			//정치
			.addCase(worldInfoApi.getNationPoliticsInfo.pending, (state) => {
				state.status = 'pending';
			})
			.addCase(worldInfoApi.getNationPoliticsInfo.fulfilled, (state, action) => {
				state.status = 'complete';
				if (action.payload.data !== undefined) {
					state.politicsInfo = action.payload.data.data[0];
				}
			})
			.addCase(worldInfoApi.getNationPoliticsInfo.rejected, (state) => {
				state.status = 'error';
			});
	},
});
