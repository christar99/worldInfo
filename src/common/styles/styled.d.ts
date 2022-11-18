import 'styled-components';
declare module 'styled-components' {
    export interface DefaultTheme {
        bgColor: string;
        sideBarColor: string;
        textColor: string;
        boxShadow: string;
        boxBorder: string;
        border: string;
        hoverColor: string;
        activeColor: string;
    }
}