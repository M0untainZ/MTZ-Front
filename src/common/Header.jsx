import styled from "styled-components";

const Header = () => {
     return (
          <>
               <STHeader>
                    <div>
                         <button className="header-back-btn">뒤</button>
                         <button className="header-home-btn">홈</button>
                    </div>
                    <div className="header-title">MTZ</div>
                    <div>
                         <span>엄홍길의 후예, 오경민</span>
                         <button className="header-myhome-btn">
                              마이페이지
                         </button>
                    </div>
               </STHeader>
          </>
     );
};

export default Header;

const STHeader = styled.div`
     box-sizing: border-box;
     width: 100%;
     height: 6vh;
     background-color: var(--color-background);
     color: white;
     font-size: 16px;
     display: flex;
     justify-content: space-between;
     align-items: center;
     gap: 20%;
     padding: 0 50px;

     div {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 20px;
          width: 20%;
          button {
               border: none;
               background-color: transparent;
               color: white;
               font-size: 16px;
          }
          .header-back-btn {
               display: none;
          }
     }
     .header-title {
          font-size: 30px;
          font-weight: bold;
     }
`;
