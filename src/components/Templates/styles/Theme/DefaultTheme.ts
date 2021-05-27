import 'styled-components';
import { CSSProp } from "styled-components"

declare module 'styled-components' {
    export interface DefaultTheme {
        // borderRadius: string;
        body: {
            fgColor: string;
            bgColor: string;
        },
        navigator : {
            a : string;
        },
        header : {},
        main : {},
        footer : {},
        button : {},
        item : {
            label : string;
            button : string;
            bar : string;
        },
        green : string,
        greenActive : string,
        blue  : string
    }
}

declare module "react" {
    export interface CSSTheme {
        css?: CSSProp<{}>
    }
}