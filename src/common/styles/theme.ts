import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
    bgColor: '#F8F7F4',
    sideBarColor: '#D8D7D4',
    textColor: '#31302E',
    border: '1px solid #EAEAEA',
    boxShadow: '0 0 10px -3px #a0a0a0',
    hoverColor: 'rgb(31, 53, 179)',
};

export const darkTheme: DefaultTheme = {
    bgColor: '#1E1E22',
    sideBarColor: '#323232',
    textColor: '#CCC',
    border: '1px solid #2C2D33',
    boxShadow: 'none',
    hoverColor: 'rgb(172, 123, 123)',
};

export const theme = {
    lightTheme,
    darkTheme
}