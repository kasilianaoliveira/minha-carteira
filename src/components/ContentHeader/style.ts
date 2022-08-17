import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.875rem;
`;

export const TitleContainer = styled.div`
  h2 {
    position: relative;
    &::before {
      content: "";
      position: absolute;

      background-color: #fff;
      width: 2.5rem;
      height: 0.3125rem;
      bottom: -0.3125rem;
    }
  }
`;
export const Controllers = styled.div`
  display: flex;
  gap: 1rem;

  button {
    border-radius: 0.3125rem;
    padding: 8px;
  }
`;
