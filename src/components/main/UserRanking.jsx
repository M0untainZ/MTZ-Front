import React from "react";
import styled from "styled-components";
import { getMain } from "../../shared/api";
import { useQuery } from "react-query";

const UserRanking = () => {
     const { data } = useQuery(["main"], getMain);

     return (
          <>
               <StRankingWrap>
                    <p>최고의 MTZ 프렌즈를 만나보세요 !</p>
                    <StUserRank>
                         {data.data.topMembers.map((el, idx) => (
                              <StUserInfo key={idx}>
                                   <span className="rank">{idx + 1}</span>
                                   <img alt="" src="logo192.png" />
                                   <p className="user-name">{el}</p>
                              </StUserInfo>
                         ))}
                    </StUserRank>
               </StRankingWrap>
          </>
     );
};

export default UserRanking;

const StRankingWrap = styled.div`
     width: 70%;
     height: 25vh;
     margin: 100px auto 50px;
     p {
          font-weight: bold;
     }
`;

const StUserRank = styled.div`
     width: 100%;
     height: 90%;
     display: flex;
     align-items: center;
     justify-content: space-between;
`;

const StUserInfo = styled.div`
     width: 33%;
     height: 100%;
     background-color: #fff;
     display: flex;
     align-items: center;
     flex-direction: column;
     position: relative;
     margin-top: 30px;
     img {
          width: 80px;
          height: 80px;
          border: 1px solid black;
          border-radius: 30px;
          margin-top: 10%;
     }
     .rank {
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 18%;
          left: 40%;
          width: 20px;
          height: 20px;
          border: 1px solid black;
          border-radius: 50%;
          background-color: #fff;
     }
     .user-name {
          margin-top: 15px;
     }
     .badge-cnt {
          font-size: 14px;
          margin-top: 10px;
     }
`;
