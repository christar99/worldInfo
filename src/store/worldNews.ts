import { createSlice } from '@reduxjs/toolkit';
import { worldInfoApi } from '@/api/worldInfoApi';

interface WorldNewsState {
	status: string;
	articles: [
		{
			source: {
				id: string;
				name: string;
			};
			author: string;
			title: string;
			description: string;
			publishedAt: string;
			url: string;
			urlToImage: string;
		}?
	];
}

const initialState: WorldNewsState = {
	status: '',
	articles: [],
};

export const worldNews = createSlice({
	name: 'getWorldNews',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(worldInfoApi.getWorldNews.pending, (state) => {
				state.status = 'pending';
			})
			.addCase(worldInfoApi.getWorldNews.fulfilled, (state, action) => {
				state.status = 'complete';
				state.articles = action.payload.data.articles;
			})
			.addCase(worldInfoApi.getWorldNews.rejected, (state) => {
				state.status = 'error';
			});
	},
});
