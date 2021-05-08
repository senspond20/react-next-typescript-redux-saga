import styled from "styled-components";

// 반응형 디자인을 위한 픽셀 컨버팅 함수
const calcRem = (size: number) => `${size / 16}rem`;

// 두개의 색상을 바꾸는 함수
const invertColor = ({fg,bg} : any) => ({
    fg : bg,
    bg : fg
})


const main = {
    Wrapper : {
        fg : "0000000",
        bg : "#ffffff",
    }
}
const fontSizes = {
    small: calcRem(14),
    base: calcRem(16),
    lg: calcRem(18),
    xl: calcRem(20),
    xxl: calcRem(22),
    xxxl: calcRem(24),
    titleSize: calcRem(50),
    title: calcRem(60),
    subtitle: calcRem(30),
    paragraph: calcRem(18),
};

const paddings = {
    small: calcRem(8),
    base: calcRem(10),
    lg: calcRem(12),
    xl: calcRem(14),
    xxl: calcRem(16),
    xxxl: calcRem(18),
};

const margins = {
    small: calcRem(8),
    base: calcRem(10),
    lg: calcRem(12),
    xl: calcRem(14),
    xxl: calcRem(16),
    xxxl: calcRem(18),
};

const interval = {
    base: calcRem(50),
    lg: calcRem(100),
    xl: calcRem(150),
    xxl: calcRem(200),
};

const verticalInterval = {
    base: `${calcRem(10)} 0 ${calcRem(10)} 0`,
};

const deviceSizes = {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "450px",
    tablet: "768px",
    tabletL: "1024px",
};

const colors = {
    black: "#000000",
    white: "#FFFFFF",
    _blue: "blue",
    gray_1: "#222222",
    gray_2: "#767676",
    green_1: "#3cb46e",
};

const device = {
    mobileS: `only screen and (max-width: ${deviceSizes.mobileS})`,
    mobileM: `only screen and (max-width: ${deviceSizes.mobileM})`,
    mobileL: `only screen and (max-width: ${deviceSizes.mobileL})`,
    tablet: `only screen and (max-width: ${deviceSizes.tablet})`,
    tabletL: `only screen and (max-width: ${deviceSizes.tabletL})`,
};
// 자주 사용하는 스타일 속성을 theme으로 만들어보자.
const common = {
    flexCenter: `
    display: flex;
    justify-contents: center;
    align-items: center;
  `,
    flexCenterColumn: `
    display: flex;
    flex-direction: column;
    justify-contents: center;
    align-items: center;
  `,
};

const theme = {
    common,
    fontSizes,
    colors,
    deviceSizes,
    device,
    paddings,
    margins,
    interval,
    verticalInterval,
};

export default theme;