import React, { FC } from "react";
import styled, { css } from "styled-components";

const StyledInput = styled.input<{
  noHover: boolean;
  className: string;
  isBlackTheme: boolean;
}>(
  ({ isBlackTheme, theme: { colors, fonts } }) => css`
    ${isBlackTheme
      ? css`
          && {
            background: #191a1a;
            border: 1px solid #313435;
          }
        `
      : css``}
  `
);

const Input: FC<any> = ({ children, className, isBlackTheme, ...rest }) => {
  return (
    <StyledInput isBlackTheme={isBlackTheme} className={className} {...rest}>
      {children}
    </StyledInput>
  );
};

Input.defaultProps = {
  noHover: false,
  isBlackTheme: false,
};

export default Input;
