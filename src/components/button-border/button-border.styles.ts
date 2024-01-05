import { theme } from "@styles/theme";
import styled, { css } from "styled-components";
import { ButtonBorderProps } from ".";

const ButtonBorderWrapperBlack = css`
  border: 1px solid transparent;
  background: ${theme.colors.black["100"]};
  & span {
    color: ${theme.colors.default.white};
  }
`;

const ButtonBorderWrapperGrey = css`
  border: 1px solid transparent;
  background: ${theme.colors.black["10"]};
  & span {
    color: ${(props) => props.theme.colors.black["60"]};
  }
`;
const ButtonBorderWrapperWhite = css`
  border: 1px solid white;
  background: ${theme.colors.black["10"]};
  & span {
    color: ${(props) => props.theme.colors.black["60"]};
  }
`;
const ButtonBorderWrapperBorder = css`
  border: 1px solid ${theme.colors.black["10"]};
  background: ${theme.colors.default.white};
  & span {
    color: ${(props) => props.theme.colors.black["60"]};
  }
`;
export const ButtonBorderWrapper = styled.div<Pick<ButtonBorderProps, "type">>`
  display: inline-flex;
  padding: 8px 14px;
  justify-content: center;
  align-items: center;
  gap: 6px;
  border-radius: 100px;
  user-select: none;
  cursor: pointer;

  ${(props) =>
    props.type === "black"
      ? ButtonBorderWrapperBlack
      : props.type === "grey"
      ? ButtonBorderWrapperGrey
      : props.type === "white"
      ? ButtonBorderWrapperWhite
      : props.type === "border"
      ? ButtonBorderWrapperBorder
      : ""};
`;
