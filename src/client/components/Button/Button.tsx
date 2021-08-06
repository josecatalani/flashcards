import React, { FC } from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button<{ buttonTheme: string }>(
  ({ buttonTheme, theme: { colors, fonts } }) => css`
    padding: 12px 32px;
    border-radius: 32px;
    background: transparent;
    font-weight: 600;
    color: #191a1a;
    font-size: 1.6rem;
    border: 0;
    cursor: pointer;
    font-family: ${fonts.title};
    letter-spacing: -0.6;
    white-space: nowrap;

    ${buttonTheme === "primary"
      ? css`
          background: ${colors.primary.normal};
        `
      : css``}
  `
);

const Button: FC<{ theme?: string }> = ({ children, theme }) => {
  return <StyledButton buttonTheme={theme}>{children}</StyledButton>;
};

Button.defaultProps = {
  theme: "clean",
};

export default Button;
