import React, { FC, ReactElement } from "react";
import { Aside } from "../Aside";
import { Content } from "../Content";
import { MainHeader } from "../MainHeader";
import { Grid } from "./style";

type Props = {
  children: ReactElement;
};
export function Layout({ children }: Props) {
  return (
    <Grid>
      <MainHeader />
      <Aside />
      <Content>{children}</Content>
    </Grid>
  );
}
