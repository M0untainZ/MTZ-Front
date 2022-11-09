import React from "react";
import styled from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const ProofImage = () => {
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
                         <img src="/icons/picture.jpg" alt="" />
                         <img src="/icons/pic.PNG" alt="" />
                         <img src="/icons/img.jpg" alt="" />
                         <img src="/icons/img1.jpg" alt="" />
                         <img src="/icons/mt.jpg" alt="" />
                         <img src="/icons/mt2.jpg" alt="" />
                         <img src="/icons/mt3.jpg" alt="" />
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
     /* border: 1px solid black; */
     img {
          width: 235px;
          height: 260px;
          object-fit: cover;
     }
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
