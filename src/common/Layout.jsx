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
`;

const STLayout = styled.div`
     width: 1400px;
     height: 90vh;
     background-color: var(--color-point);
     display: flex;
     flex-direction: column;
     box-sizing: border-box;
`;
