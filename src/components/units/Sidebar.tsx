import { ChangeEvent, useState, useEffect } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from 'store/index';
import { setOpenMenu } from 'store/common';
import Divider from 'components/common/Divider';
import MenuList from 'components/units/MenuList';
import { BiSearchAlt2 } from 'react-icons/bi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { VscClose } from 'react-icons/vsc';

const SidebarContainer = styled.div`
    position: fixed;
`;

const MenuOpenButton = styled.div<{ openMenu: boolean }>`
    position: absolute;
    top: 15px;
    left: 15px;
    font-size: 3rem;
    margin-left: ${props => props.openMenu ? '300px' : 0};
    transition-duration: 0.5s;

    :hover {
        cursor: pointer;
    }
`;

const SidebarArea = styled.div<{ openMenu: boolean}>`
    width: ${props => props.openMenu ? '300px' : 0};
    height: 100vh;
    transition-duration: 0.5s;
    background-color: ${props => props.theme.sideBarColor};
`;

const SidebarContent = styled.div<{ openMenu: boolean}>`
    display: ${props => props.openMenu ? 'block': 'none'};
    padding: 0 0 15px 0;
    width: 100%;
    height: 100%;
    overflow-y: auto;
`;

const SearchWrap = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
`;

const SearchContainer = styled.div`
    padding-top: 15px;
    position: fixed;
    z-index: 150;
    font-size: 2.5rem;
    width: 280px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.theme.sideBarColor};
`;

const InputBox = styled.input`
    width: 95%;
    height: 35px;
    border-radius: 30px;
    padding: 0 40px;
    font-size: 1.5rem;
    color: ${props => props.theme.textColor};
`;

const SearchIcon = styled.div`
    position: absolute;
    top: 20px;
    left: 15px;
`;

const CloseButton = styled.div`
    position: absolute;
    top: 20px;
    right: 15px;

    :hover {
        cursor: pointer;
    }
`;


function Sidebar() {
    const openMenu = useAppSelector(state => state.common.openMenu);
    const dispatch = useAppDispatch();
    const [searchValue, setSearchValue] = useState<string>('');

    const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    }

    const resetValue = () => {
        setSearchValue('');
    }

    useEffect(() => {
        if(!openMenu) {
            setSearchValue('');
        }
    }, [openMenu]);

    return (
        <>
            <SidebarContainer>
                <MenuOpenButton openMenu={openMenu} onClick={() => dispatch(setOpenMenu())}>
                    <GiHamburgerMenu />
                </MenuOpenButton>
                <SidebarArea openMenu={openMenu}>
                    <SidebarContent openMenu={openMenu}>
                        <SearchWrap>
                            <SearchContainer>
                                <SearchIcon>
                                    <BiSearchAlt2 />
                                </SearchIcon>
                                <InputBox onChange={changeValue} value={searchValue} placeholder="국가를 검색하세요."/>
                                <CloseButton onClick={resetValue}>
                                    <VscClose />
                                </CloseButton>
                                <Divider mb={0} />
                            </SearchContainer>
                        </SearchWrap>
                        <MenuList searchValue={searchValue}/>
                    </SidebarContent>
                </SidebarArea>
            </SidebarContainer>
        </>
    );
}

export default Sidebar;