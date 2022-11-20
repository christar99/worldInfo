import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const defaultApiURL = 'https://worldinfo-api.herokuapp.com';
const newsApiURL = 'https://newsapi.org/v2/everything?';
const nationInfoApiURL = 'http://apis.data.go.kr/1262000';

export const worldInfoApi = {
	// RDBMS
	getNationsList: createAsyncThunk('worldInfoApi/getNationsList', async () => {
		const response = await axios.get<NationInfo[]>(defaultApiURL + '/nations');
		return response;
	}),
	// NewsApi
	getWorldNews: createAsyncThunk(
		'worldNewsApi/getWorldnews',
		async (props: { searchValue: string; sortItems: string }) => {
			const { searchValue, sortItems } = props;
			const response = await axios.get(
				`${newsApiURL}q=${searchValue === '' ? 'news' : searchValue}&sortBy=${sortItems}&language=en&apikey=${
					process.env.REACT_APP_NEWS_API_KEY
				}`
			);
			return response;
		}
	),

	// 공공데이터포털 외교부 (국기이미지)
	getNationFlag: createAsyncThunk('publicDataPortal/getNationFlag', async (code: string) => {
		const response = await axios.get(
			`${nationInfoApiURL}/CountryFlagService2/getCountryFlagList2?serviceKey=${process.env.REACT_APP_WORLD_GENERAL_APP_KEY}&numOfRows=1&pageNo=1&cond[country_iso_alp2::EQ]=${code}`
		);
		return response;
	}),

	// 공공데이터포털 외교부 (국가일반정보)
	getNationGeneralInfo: createAsyncThunk('publicDataPortal/getNationGeneralInfo', async (code: string) => {
		const response = await axios.get(
			`${nationInfoApiURL}/OverviewGnrlInfoService/getOverviewGnrlInfoList?serviceKey=${process.env.REACT_APP_WORLD_GENERAL_APP_KEY}&numOfRows=1&pageNo=1&cond[country_iso_alp2::EQ]=${code}`
		);
		return response;
	}),

	// 공공데이터포털 외교부 (국가경제정보)
	getNationEconomyInfo: createAsyncThunk('publicDataPortal/getNationEconomyInfo', async (code: string) => {
		const response = await axios.get(
			`${nationInfoApiURL}/CountryEconomyService2/getCountryEconomyList2?serviceKey=${process.env.REACT_APP_WORLD_GENERAL_APP_KEY}&numOfRows=1&pageNo=1&cond[country_iso_alp2::EQ]=${code}`
		);
		return response;
	}),

	// 공공데이터포털 외교부 (국가정치정보)
	getNationPoliticsInfo: createAsyncThunk('publicDataPortal/getNationPoliticsInfo', async (code: string) => {
		const response = await axios.get(
			`${nationInfoApiURL}/CountryPoliticService2/getCountryPoliticList2?serviceKey=${process.env.REACT_APP_WORLD_GENERAL_APP_KEY}&numOfRows=1&pageNo=1&cond[country_iso_alp2::EQ]=${code}`
		);
		return response;
	}),
};

interface NationInfo {
	idx: number;
	name: string;
	continent: string;
	code: string;
}
