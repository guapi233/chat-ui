import React from "react";
import styled from "styled-components";

const CcBtn = styled.div`
  width: ${({ width }) => width || "80px"};
  background: ${({ theme }) => theme.primaryColor || "red"};
`;

function Button({width}) {
  return <CcBtn width={width}>Hello world!</CcBtn>;
}

export default Button;
