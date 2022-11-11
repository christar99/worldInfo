import { useMemo, useState, useEffect, useCallback, useRef } from 'react';
import { useAppSelector } from "store/index";
import styled from "styled-components";
import Divider from "components/common/Divider";
import { Link } from 'react-router-dom';

const MainMenu = styled.div<{ pl?: number}>`
    font-size: 2rem;
    padding: 10px;
    padding-left: ${props => props.pl + 'px'};

    :hover {
        cursor: pointer;
        opacity: 0.8;
    }
`;

const ContinentMenu = styled.div`
    font-size: 1.7rem;
    padding: 10px 30px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.4);

    :hover {
        cursor: pointer;
        opacity: 0.8;
    }
`;

const ContinentTitle = styled.p<{ active: boolean}>`
    display: flex;
    justify-content: space-between;
    height: 30px;
    line-height: ${props => props.active ? '20px' : '30px'};
    color: ${props => props.active ? props.theme.hoverColor : 'inherit'};
`;

const NationMenu = styled.div<{ active: boolean }>`
    font-size: 1.5rem;
    padding: 10px 20px;
    border-top: 1px solid rgba(0, 0, 0, 0.3);
    color: ${props => props.active ? props.theme.hoverColor : 'inherit'};

    :hover {
        color: ${props => props.theme.hoverColor};
    }
`;

type MenuListProps = {
    searchValue: string;
}

function MenuList({ searchValue }: MenuListProps) {
    const nation_list = useAppSelector(state => state.nation_list);
    const { nations } = nation_list;
    const continent: string[] = useMemo(() => {
        const continent_set = new Set<string>();
        nations.forEach((nation) => {
            if(nation?.continent !== undefined) {
                continent_set.add(nation?.continent);
            }
        })
        return Array.from(continent_set).sort((a: string, b: string) => a > b ? 1 : -1);
    }, [nations]);

    const [subMenu, openSubMenu] = useState<Array<boolean>>(
        new Array(continent.length).fill(false)
    );

    const nationRef = useRef<null[] | HTMLDivElement[]>([]);


    const openSubMenuCallback = useCallback((index: number, fromSearch: boolean) => {
        openSubMenu((subMenu) => subMenu.map((notUse, idx: number) => {
            if(index === idx && !fromSearch) {
                return !subMenu[idx];
            }
            else if(index === idx && fromSearch) {
                return searchValue === '' ? false: true;
            }
            return false;
        }));
    }, [searchValue]);
    
    useEffect(() => {
        if(continent.length !== 0) {
            const subMenuArr = new Array(continent.length).fill(false);
            openSubMenu(subMenuArr);
        }
    }, [continent]);

    useEffect(() => {
        const searchNation = nations.find(nation => nation?.name === searchValue);
        if(searchNation !== undefined) {
            const continentIdx = continent.findIndex((name: string) => {
                return searchNation.continent === name;
            });
            const nationIdx = nations.findIndex((nation) => {
                return searchValue === nation?.name
            });

            openSubMenuCallback(continentIdx, true);
            setTimeout(() => {
                nationRef.current[nationIdx]?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });            
            }, 250);
        }
    }, [searchValue, nations, continent, openSubMenuCallback]);

    return (
        <div>
            <>
            <MainMenu pl={30}>
                <Link to="/">세계 뉴스</Link>
            </MainMenu>
            <Divider />
            <MainMenu pl={30}>
                <Link to="/statistics">통계</Link>
            </MainMenu>
            <Divider />
            <MainMenu>▾ 세계정보</MainMenu>
            <Divider mb={0}/>
            {
                continent.map((name, index) => {
                    return (
                        <ContinentMenu key={name}>
                            <ContinentTitle
                                active={subMenu[index]}
                                onClick={() => openSubMenuCallback(index, false)}
                            >
                                <span>
                                    { subMenu[index] ? '▾' : '▸' }
                                    { name }
                                </span>
                                <span>
                                    ({nations.filter((nation) => nation?.continent === name).length })
                                </span>
                            </ContinentTitle>
                            { 
                                nations.map((nation, nation_idx) => {
                                    return (
                                        subMenu[index] && nation?.continent === name && 
                                        <NationMenu
                                            key={nation_idx}
                                            active={searchValue === nation?.name}
                                            ref={element => nationRef.current[nation_idx] = element}
                                        >
                                            <Link to={{ pathname:`nation/${nation_idx}` }}>
                                                { nation?.name }
                                            </Link>
                                        </NationMenu>
                                    )
                                })
                            }
                        </ContinentMenu>
                    )
                })
            }
            </>
        </div>
    );
}

export default MenuList;