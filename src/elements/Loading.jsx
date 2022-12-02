import React from "react";
import styled from "styled-components";
import { FaSpinner } from "react-icons/fa";

const Loading = () => {
  return (
    <StLoading>
      <FaSpinner />
    </StLoading>
  );
};

export default Loading;

const StLoading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 80px;
  margin: 10px auto;
  svg {
    width: 40px;
    height: 40px;
    animation: spin 2s linear infinite;
    path {
      color: var(--lightGray-color);
    }
  }
  @keyframes spin {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @media (max-width: 639px) {
    svg {
      width: 30px;
      height: 30px;
    }
  }
`;