import React from "react";
import styled from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { getData } from "../../shared/api";
import { useQuery } from "react-query";

const ProofImage = () => {
     const {data} = useQuery(["main"], getData)
     return (
          <>
               <StProofWrap>
                    <p>인증사진 📷</p>
                    <StImageList>
                         <button className="img-btn prev">
                              <IoIosArrowBack />
                         </button>
                         <button className="img-btn next">
                              <IoIosArrowForward />
                         </button>
                         {data?.data.certificationPhoto.map((el) => 
                              <img src={`${el.photo}`} alt="" key={data} />
                         )}
                    </StImageList>
               </StProofWrap>
          </>
     );
};

export default ProofImage;

const StProofWrap = styled.div`
     width: 70%;
     height: 20%;
     margin: 20px auto;
     box-sizing: border-box;
     position: relative;
     p {
          margin-bottom: 10px;
     }
`;

const StImageList = styled.div`
     width: 100%;
     height: 100%;
     display: flex;
     justify-content: space-between;
     gap: 14px;
     align-items: center;
     overflow: hidden;
     img {
          width: 235px;
          height: 260px;
          object-fit: cover;
     }
     /* border: 1px solid black; */
     .img-btn {
          font-weight: bolder;
          width: 30px;
          height: 30px;
          border: none;
          border-radius: 50%;
          background-color: transparent;
          font-size: 25px;
          /* background-color: rgba(0, 0, 0, 0.5); */
          /* color: #fff; */
     }
     .prev {
          left: -5%;
          position: absolute;
     }
     .next {
          right: -5%;
          position: absolute;
     }
`;
