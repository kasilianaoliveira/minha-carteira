import "styled-components";

declare module "styled-components" {
  // eslint-disable-next-line import/no-anonymous-default-export
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;
      tertiary: string;

      white: string;
      black: string;
      gray: string;
      blue: string;

      success: string;
      info: string;
      warning: string;
    };
  }
}
