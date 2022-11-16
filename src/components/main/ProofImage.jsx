import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import { getMain } from "../../shared/api";
import { useQuery } from "react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, { Navigation } from "swiper/core";
import {FaLongArrowAltLeft, FaLongArrowAltRight} from "react-icons/fa"
const ProofImage = () => {
     const {data} = useQuery(["main"], getMain)
     SwiperCore.use([Navigation]);
     const prevRef = useRef(null);
     const nextRef = useRef(null);

     const [swiperOptions, setSwiperOptions] = useState(null);

     useEffect(() => {
          if (!swiperOptions) {
               // swiper 컴포넌트에 옵션을 직접 넣으면 코드가 길어지기 때문에 따로 빼서 사용
               const options = {
                    spaceBetween: 30,
                    navigation: {
                         prevEl: prevRef.current,
                         nextEl: nextRef.current
                    },
                    slidesPerView: 4,
                    onBeforeInit: (swiper) => {
                         swiper.params.navigation.prevEl = prevRef.current;
                         swiper.params.navigation.nextEl = nextRef.current;
                         swiper.navigation.update();
                    },
               };
               setSwiperOptions(options);
          }
     }, [swiperOptions]);

     return (
          <>
               <StProofWrap>
                    <p>인증사진 📷</p>
                    <StImageList>
                         <PrevBtn ref={prevRef} className="disabled">
                              <FaLongArrowAltLeft />
                         </PrevBtn>
                         {swiperOptions && (
                              <Swiper {...swiperOptions} className="swiper">
                                   {data?.data.certificationPhoto.map((el) => 
                                        <SwiperSlide className="swiper-slide">
                                             <img src={`${el.photo}`} alt="" />
                                        </SwiperSlide>
                                   )}
                                   <SwiperSlide className="swiper-slide">
                                        <img src="/icons/mainbanner.png" alt="" />
                                   </SwiperSlide>
                                   <SwiperSlide className="swiper-slide">
                                        <img src="/icons/mainbanner.png" alt="" />
                                   </SwiperSlide>
                                   <SwiperSlide className="swiper-slide">
                                        <img src="/icons/mainbanner.png" alt="" />
                                   </SwiperSlide>
                                   <SwiperSlide className="swiper-slide">
                                        <img src="/icons/mainbanner.png" alt="" />
                                   </SwiperSlide>
                                   <SwiperSlide className="swiper-slide">
                                        <img src="/icons/mainbanner.png" alt="" />
                                   </SwiperSlide>
                                   <SwiperSlide className="swiper-slide">
                                        <img src="/icons/mainbanner.png" alt="" />
                                   </SwiperSlide>
                              </Swiper>
                         )}
                         <NextBtn ref={nextRef} className="disabled">
                              <FaLongArrowAltRight />
                         </NextBtn>
                    </StImageList>
               </StProofWrap>
          </>
     );
};

export default ProofImage;

const StProofWrap = styled.div`
     width: 70%;
     height: 20%;
     margin: 30px auto;
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
     align-items: center;
     overflow: hidden;
     .swiper {
          width: 100%;
          height: 30vh;
          &-button-disabled {
               visibility: hidden;
          }
     }
     .swiper-slide {
          width: 300px;
          height: 100%;
          img {
               width: 100%;
               height: 100%;
               object-fit: cover;
          }
     }
`;

const PrevBtn = styled.button`
     width: 25px;
     height: 25px;
     border: 1px solid black;
     border-radius: 50%;
     display: flex;
     justify-content: center;
     align-items: center;
     font-size: 20px;
     color: black;
     position: absolute;
     z-index: 10;
     left: -2vw;
     cursor: pointer;
     &:hover {
          box-shadow: 0 0 5px black;
     }
`;

const NextBtn = styled.button`
     width: 25px;
     height: 25px;
     border: 1px solid black;
     border-radius: 50%;
     display: flex;
     justify-content: center;
     align-items: center;
     font-size: 20px;
     color: black;
     position: absolute;
     z-index: 10;
     right: -2vw;
     cursor: pointer;
     &:hover {
          box-shadow: 0 0 5px black;
     }
`;