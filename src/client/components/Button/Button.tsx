import React, { FC } from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button<{ buttonTheme: string; noHover: boolean }>(
  ({ buttonTheme, noHover, theme: { colors, fonts } }) => css`
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
    transition: all 300ms ease;

    ${buttonTheme === "primary"
      ? css`
          background: ${colors.primary.normal};

          ${noHover
          ? css``
          : css`
                &:hover {
                  background: ${colors.primary.dark};
                }
              `}
        `
      : css``}

    ${buttonTheme === "primaryRed"
      ? css`
          background: ${colors.red.normal};

          ${noHover
          ? css``
          : css`
                &:hover {
                  background: ${colors.red.dark};
                }
              `}
        `
      : css``}

    ${buttonTheme === "clean"
      ? css`
          background: white;

          ${noHover
          ? css``
          : css`
                &:hover {
                  background: black;
                  color: white;
                }
              `}
        `
      : css``}

${buttonTheme === "black"
      ? css`
          background: #313435;
          color: white;

          ${noHover
          ? css``
          : css`
                &:hover {
                  background: #313435;
                  color: white;
                }
              `}
        `
      : css``}
  `
);

const Button: FC<any> = ({
  children,
  theme,
  className,
  noHover = false,
  ...rest
}) => {
  return (
    <StyledButton {...rest} buttonTheme={theme} className={className} noHover={noHover}>
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  theme: "clean",
  noHover: false,
};

export default Button;
