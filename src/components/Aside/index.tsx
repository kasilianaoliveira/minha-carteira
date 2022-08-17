import React, { FC } from "react";
import {
  MdSpaceDashboard,
  MdAccountBalanceWallet,
  MdOutlineArrowCircleUp,
  MdOutlineArrowCircleDown,
  MdExitToApp,
} from "react-icons/md";
import {
  Container,
  Header,
  LogoImg,
  Title,
  MenuContainer,
  MenuItemLink,
} from "./style";
import Logo from "../../assets/logo.svg";
export const Aside: FC = () => {
  return (
    <Container>
      <Header>
        <LogoImg src={Logo} alt="Logo minha carteira" />
        <Title>Minha carteira</Title>
      </Header>

      <MenuContainer>
        <MenuItemLink href="#">
          <MdSpaceDashboard />
          Dashboard
        </MenuItemLink>
        <MenuItemLink href="#">
          <MdAccountBalanceWallet />
          Novo registro
        </MenuItemLink>
        <MenuItemLink href="#">
          <MdOutlineArrowCircleUp />
          Entradas
        </MenuItemLink>
        <MenuItemLink href="#">
          <MdOutlineArrowCircleDown />
          Saidas
        </MenuItemLink>
        <MenuItemLink href="#">
          <MdExitToApp />
          Sair
        </MenuItemLink>
      </MenuContainer>
    </Container>
  );
};
