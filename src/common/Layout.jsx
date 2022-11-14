import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <STLayoutContainer>
      <STLayout>{children}</STLayout>
    </STLayoutContainer>
  );
};

export default Layout;

const STLayoutContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 100%;
  background-color: var(--color-point);
`;

const STLayout = styled.div`
  width: 100%;
  height: 100%;
  min-height: 90vh;
  background-color: var(--color-point);
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;