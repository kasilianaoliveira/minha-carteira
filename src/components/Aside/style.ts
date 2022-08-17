import styled from "styled-components";

export const Container = styled.div`
  grid-area: AS;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.secondary};

  border-right: 1px solid ${(props) => props.theme.colors.gray};

  padding: 0 1.25rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5.625rem;
`;

export const Header = styled.div`
  height: 5rem;
  display: flex;
  align-items: center;
  gap: 0.625rem;
`;

export const LogoImg = styled.img`
  height: 1.875rem;
`;

export const Title = styled.h3``;

export const MenuContainer = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
`;

export const MenuItemLink = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;

  color: inherit;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.6;
  }

  > svg {
    font-size: 20px;
  }
`;
