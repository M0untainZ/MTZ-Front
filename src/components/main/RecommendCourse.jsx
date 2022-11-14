import React, { useState } from "react";
import styled from "styled-components";

const RecommendCourse = () => {

    const [recommendList, setRecommendList] = useState(false);
    const onListToggle = () => {
        setRecommendList(!recommendList);
    }
    return (
        <>
            <StRecommendWrap>
                <StRecommendHeader>
                    <span>MTZ 엄선 등산코드 🏃‍♂️</span>
                    { recommendList === false ?  <span onClick={onListToggle}>더보기</span> : <span onClick={onListToggle}>접기</span>}
                </StRecommendHeader>
                <StRecommend>
                        <div>
                            <span># 등산초보 산린이를 위한 산행 코스 추천</span>
                            <img alt="" src="/icons/등산초보 산린이를 위한 산행 코스 추천.png" />
                        </div>
                        <div>
                            <span># 2022 마지막 단풍놀이, 이곳에서 즐겨요!</span>
                            <img alt="" src="/icons/2022 마지막 단풍놀이, 이곳에서 즐겨요!.png" />
                        </div>
                    { recommendList === false ? null :
                    <>
                        <div>
                            <span># 가족과 함께 가볍게 즐기기 좋은 짧은 산행 코스</span>
                            <img alt="" src="/icons/가족과 함께 가볍게 즐기기 좋은 짧은 산행 코스.png" />
                        </div>
                        <div>
                            <span># 서울 도심에서 즐기는 등산 코스</span>
                            <img alt="" src="/icons/서울 도심에서 즐기는 등산 코스.png" />
                        </div>
                        <div>
                            <span># 이번 주말 데이트로 추천하는 가벼운 등산 코스</span>
                            <img alt="" src="/icons/이번 주말 데이트로 추천하는 가벼운 등산 코스.png" />
                        </div>
                        <div>
                            <span># 한걸음 더 나아가, 중급 등산러를 위한 추천 리스트</span>
                            <img alt="" src="/icons/한걸음 더 나아가, 중급 등산러를 위한 추천 리스트.png" />
                        </div>
                    </>
                    }
                </StRecommend>
            </StRecommendWrap>
        </>
    );
}


export default RecommendCourse;

const StRecommendWrap = styled.div`
     width: 70%;
     height: 15%;
     margin: 50px auto;
`;

const StRecommendHeader = styled.div`
     width: 100%;
     height: 20px;
     display: flex;
     justify-content: space-between;
     align-items: center;
     span {
          cursor: pointer;
     }
`;

const StRecommend = styled.div`
    width: 100%;
    div {
          width: 100%;
          height: 150px;
          margin: 10px 0px;
          position: relative;
    }
    img {
          width: 100%;
          height: 100%;
          object-fit: cover;
    }
    span {
          display: flex;
          align-items: center;
          justify-content: center;
          max-width: 40%;
          height: 15px;
          position: absolute;
          bottom: 15px;
          left: 20px;
          border: 1px solid black;
          border-radius: 15px;
          padding: 5px 15px;
          background-color: #fff;
    }
`;
