import styled from "styled-components";
import Switch, { ReactSwitchProps } from "react-switch";

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const ToggleLabel = styled.span``;

//Attr - possibilita a modificação das propriedades do elemento
export const ToggleSelector = styled(Switch).attrs<ReactSwitchProps>(
  ({ theme }) => ({
    onColor: theme.colors.info,
    offColor: theme.colors.warning,
    checkedIcon: false,
    uncheckedIcon: false,
    height: 20,
    width: 50,
  })
)<ReactSwitchProps>`
  margin: 0 10px;
`;
