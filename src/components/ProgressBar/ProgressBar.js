/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const BarBackground = styled.div`
  display: inline-block;
  position: relative;
  background: ${COLORS.transparentGray15};
  width: 370px;
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: 8px;
  overflow: auto;
`;

const Bar = styled.div`
  height: 100%;
  width: ${(props) => props.value}%;
  background-color: ${COLORS.primary};
`;

const OverflowContainer = styled.div`
  border-radius: 4px;
  height: 100%;
  width: 100%;
  overflow: auto;
`;

const sizes = {
  large: {
    height: "24px",
    padding: "4px",
  },
  medium: {
    height: "12px",
  },
  small: {
    height: "8px",
  },
};

const ProgressBar = ({ value, size }) => {
  const sizeProps = sizes[size];
  return (
    <BarBackground {...sizeProps}>
      <OverflowContainer>
        <Bar value={value} />
      </OverflowContainer>
      <VisuallyHidden>
        <progress value={value / 100} />
      </VisuallyHidden>
    </BarBackground>
  );
};

export default ProgressBar;
