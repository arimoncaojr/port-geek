import styled from "styled-components";

export interface iUserFormation {
  fontSize: number;
  color: string;
  fontSizeP: number;
}

export const FormationStyled = styled.section<iUserFormation>`
  h2 {
    font-size: ${({ fontSize }) => `${fontSize}em`};
    color: ${({ color }) => `var(${color})`};
    font-weight: 700;
  }
  p {
    font-size: ${({ fontSizeP }) => `${fontSizeP}em`};
    font-weight: 500;
    color: ${({ color }) => `var(${color})`};
  }
`;
