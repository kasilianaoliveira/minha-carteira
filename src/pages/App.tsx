import React, { FC } from "react";
import { ThemeProvider } from "styled-components";
import { Layout } from "../components/Layout";
import GlobalStyles from "./styles/GlobalStyles";
import dark from "./styles/theme/dark";

export const App: FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Layout />
    </ThemeProvider>
  );
};
