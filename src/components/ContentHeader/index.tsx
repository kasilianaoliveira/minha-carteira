import React, { FC } from "react";
import { Container, TitleContainer, Controllers } from "./style";

export const ContentHeader: FC = () => {
  return (
    <Container>
      <TitleContainer>
        <h2>Entradas</h2>
      </TitleContainer>
      <Controllers>
        <button>Button 1</button>
        <button>Button 2</button>
      </Controllers>
    </Container>
  );
};
