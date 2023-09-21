import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <SelectElement value={value} onChange={onChange}>
        {children}
      </SelectElement>
      <SelectTrigger>
        {displayedValue}
        <SelectIcon id="chevron-down" />
      </SelectTrigger>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const SelectElement = styled.select`
  position: absolute;
  inset: 0;
  opacity: 0;

  &:hover {
    cursor: pointer;
  }
`;

const SelectTrigger = styled.div`
  cursor: pointer;
  display: flex;
  width: fit-content;
  align-items: center;
  height: 43px;
  padding: 12px 16px;
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  font-size: 1rem;
  border-radius: 8px;

  ${SelectElement}:hover + & {
    color: ${COLORS.black};
  }

  ${SelectElement}:focus + & {
    outline: 5px auto blue;
  }
`;

const SelectIcon = styled(Icon)`
  display: inline-block;
  margin-left: 24px;
`;

export default Select;
