import 'styled-components';
declare module 'styled-components' {
    export interface DefaultTheme {
        bgColor: string;
        sideBarColor: string;
        textColor: string;
        boxShadow: string;
        border: string;
        hoverColor: string;
    }
}