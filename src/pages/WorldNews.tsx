import { useAppSelector, useAppDispatch } from 'store/index';
import { useMemo, useState, ChangeEvent, FormEvent, useEffect, useRef } from 'react';
import { worldInfoApi } from 'api/worldInfoApi';
import styled from 'styled-components';
import dayjs from 'dayjs';
import Pagination from 'components/common/Pagination';
import queryString from 'query-string';
import { BiSearchAlt2 } from 'react-icons/bi';
import { loading } from 'store/common';

const WorldNewsWrap = styled.div`
	width: 100%;
`;

const OptionsMenu = styled.div`
	margin-bottom: 20px;
`;

const SearchMenu = styled.div`
	position: relative;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	gap: 20px;
	margin-bottom: 10px;

	svg {
		font-size: 2.5rem;
		position: absolute;
		top: 3px;
		right: 5px;

		:hover {
			cursor: pointer;
		}
	}
`;

const SortList = styled.select`
	width: 80px;
	height: 30px;

	:hover {
		cursor: pointer;
	}
`;

const InputBox = styled.input`
	width: 200px;
	height: 30px;
	padding: 10px;
	border-radius: 10px;
	color: ${(props) => props.theme.textColor};
`;

const NewsList = styled.div`
	width: 100%;
	height: 200px;
	border: ${(props) => props.theme.boxBorder};
	margin-bottom: 20px;
	padding: 10px;
	display: flex;
	gap: 20px;
`;

const ArticleImage = styled.img`
	width: 15%;
	height: 100%;
	background-position: center;
	background-size: cover;

	:hover {
		cursor: pointer;
	}
`;

const NewsContent = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const NewsTitle = styled.div`
	font-size: 2.5rem;
	color: #3b5998;
	margin-bottom: 20px;

	:hover {
		cursor: pointer;
	}
`;

const NewsDescription = styled.p`
	font-size: 2rem;

	:hover {
		cursor: pointer;
	}
`;

const MoreInfo = styled.div`
	font-size: 1.5rem;
	display: flex;
	justify-content: flex-end;
	font-weight: 700;

	:hover {
		cursor: pointer;
	}
`;

function WorldNews() {
	const dispatch = useAppDispatch();
	const worldNewsList = useAppSelector((state) => state.worldNewsList);
	const { articles } = worldNewsList;
	const { status } = worldNewsList;
	const qs = queryString.parse(window.location.search);
	const { limit } = qs;
	const { page } = qs;
	const [sortItems, setSortItems] = useState<string>('publishedAt');
	const [searchValue, setSearchValue] = useState<string>('');
	const searchButton = useRef<HTMLSpanElement | null>(null);

	const currentLoadArticles = useMemo(() => {
		return articles.filter((notUse, index: number) => {
			return index >= Number(limit) * (Number(page) - 1) && index < Number(limit) * Number(page);
		});
	}, [articles, limit, page]);

	const goToNewsSite = (url: string | undefined) => {
		if (typeof url === 'string') {
			window.open(url);
		}
	};

	const changeSortItems = (e: ChangeEvent<HTMLSelectElement>) => {
		setSortItems(e.target.value);
		dispatch(worldInfoApi.getWorldNews({ searchValue, sortItems }));
	};

	const handleSetSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);
	};

	const searchNews = (e: FormEvent<HTMLFormElement | HTMLOrSVGElement>) => {
		e.preventDefault();
		dispatch(worldInfoApi.getWorldNews({ searchValue, sortItems }));
	};

	useEffect(() => {
		dispatch(worldInfoApi.getWorldNews({ searchValue, sortItems }));

		return setSearchValue('');
		// eslint-disable-next-line
	}, [dispatch]);

	useEffect(() => {
		if (status === 'pending') {
			dispatch(loading(true));
		} else {
			dispatch(loading(false));
		}
	}, [status, dispatch]);

	return (
		<WorldNewsWrap>
			<OptionsMenu>
				<SearchMenu>
					<SortList onChange={(e) => changeSortItems(e)} value={sortItems}>
						<option value={'publishedAt'}>최신순</option>
						<option value={'relevancy'}>관련순</option>
						<option value={'popularity'}>인기순</option>
					</SortList>
					<form onSubmit={(e) => searchNews(e)}>
						<InputBox
							placeholder="영문으로 검색"
							value={searchValue}
							onChange={(e) => handleSetSearchValue(e)}
						/>
						<span ref={searchButton} onClick={(e) => searchNews(e)}>
							<BiSearchAlt2 />
						</span>
					</form>
				</SearchMenu>
				<Pagination totalElement={articles.length} />
			</OptionsMenu>
			{currentLoadArticles.map((article, index) => {
				return (
					<NewsList key={index}>
						<ArticleImage src={article?.urlToImage} onClick={() => goToNewsSite(article?.urlToImage)} />
						<NewsContent>
							<div>
								<NewsTitle onClick={() => goToNewsSite(article?.url)}>{article?.title}</NewsTitle>
								<NewsDescription onClick={() => goToNewsSite(article?.url)}>
									{article?.description}
								</NewsDescription>
							</div>
							<MoreInfo onClick={() => goToNewsSite(article?.url)}>
								{dayjs(article?.publishedAt).format('YYYY-MM-DD')} | {article?.source.name}
							</MoreInfo>
						</NewsContent>
					</NewsList>
				);
			})}
		</WorldNewsWrap>
	);
}

export default WorldNews;
