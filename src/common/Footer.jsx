import styled from "styled-components";

const Footer = () => {
     return (
          <>
               <STFooter>
                    <div>마운틴즈</div>
                    <div>
                         <span>
                              <b>FE</b> 오경민 김민석 이현진
                         </span>
                         <span>
                              <b>BE</b> 조평연 이동재
                         </span>
                         <span>
                              <b>UI/UX</b> 정예원
                         </span>
                    </div>
               </STFooter>
          </>
     );
};

export default Footer;

const STFooter = styled.div`
     box-sizing: border-box;
     width: 100%;
     height: 4vh;
     background-color: var(--color-background);
     color: white;
     display: flex;
     justify-content: space-between;
     align-items: center;
     gap: 400px;
     padding: 0 50px;
     div {
          display: flex;
          justify-content: center;
          gap: 20px;
     }
`;
