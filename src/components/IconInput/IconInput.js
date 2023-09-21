import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const sizes = {
  small: {
    height: "24px",
    fontSize: "14px",
    iconSize: 16,
    paddingLeft: "24px",
    borderWidth: "1px",
  },
  large: {
    height: "36px",
    fontSize: "18px",
    iconSize: 24,
    paddingLeft: "36px",
    borderWidth: "2px",
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const { iconSize, ...inputSizeProps } = sizes[size];
  return (
    <>
      <label>
        <VisuallyHidden>{label}</VisuallyHidden>
        <InputWrapper>
          <Input
            type="text"
            placeholder={placeholder}
            width={width}
            {...inputSizeProps}
          />
          <InputIcon id={icon} size={iconSize} strokeWidth={2} />
        </InputWrapper>
      </label>
    </>
  );
};

const InputWrapper = styled.div`
  position: relative;
  display: inline-block;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const Input = styled.input`
  border: none;
  border-bottom: ${(props) => props.borderWidth} solid ${COLORS.black};
  padding: 6px;
  padding-left: ${(props) => props.paddingLeft};
  height: ${(props) => props.height};
  width: ${(props) => props.width}px;
  font-size: ${(props) => props.fontSize};
  font-weight: 700;
  color: inherit;

  &:focus {
    outline-offset: 2px;
  }

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

const InputIcon = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
`;

export default IconInput;
