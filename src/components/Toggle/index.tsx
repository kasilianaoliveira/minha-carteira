import React, { FC } from "react";
import { Container, ToggleLabel, ToggleSelector } from "./style";
export const Toggle: FC = () => {
  return (
    <Container>
      <ToggleLabel>Light</ToggleLabel>
      <ToggleSelector onChange={() => {}} checked />
      <ToggleLabel>Dark</ToggleLabel>
    </Container>
  );
};
