import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { getMain } from "../../shared/api";
import { useQuery } from "react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Navigation } from "swiper/core";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProofImage = () => {
  const navigate = useNavigate();
  const [mainProof, setMainProof] = useState([]);
  const { data } = useQuery(["main"], getMain, {
    refetchOnWindowFocus: false,
    staleTime: 5000,
    cacheTime: Infinity,
    onSuccess: (config) =>
      setMainProof(config.data.certificationPhoto.reverse().slice(0, 10)),
  });

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
          nextEl: nextRef.current,
        },
        slidesPerView: 7,
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
          <PrevBtn ref={prevRef} className="disabled" title="왼쪽 버튼">
            <FaLongArrowAltLeft />
          </PrevBtn>
          {swiperOptions && (
            <Swiper {...swiperOptions} className="swiper">
              {mainProof.map((el, idx) => {
                if(idx === 9) {
                  return (
                       <SwiperSlide className="swiper-slide" key={idx}>
                            <div className="see-more" onClick={() => navigate("/certification")}>
                              <img src="/icons/icon_dot.png" alt="" />
                              <p>더보기</p>
                            </div>
                            <img src={`${el.photo}`} alt="" />
                       </SwiperSlide>
                      )
                } else {
                      return (
                          <SwiperSlide className="swiper-slide" key={idx}>
                                <img src={`${el.photo}`} alt="" />
                          </SwiperSlide>
                      )
                  }
        })}
            </Swiper>
          )}
          <NextBtn ref={nextRef} className="disabled" title="오른쪽 버튼">
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
  .swiper {
    width: 100%;
    height: 15vh;
    overflow: hidden;
    &-button-disabled {
      visibility: hidden;
    }
  }
  .swiper-slide {
    width: 300px;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    .see-more {
      width: 50px;
      height: 50px;
      z-index: 5;
      position: absolute;
      color: #ffffff;
      font-size: 16px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 10px;
      cursor: pointer;
      img {
        width: 50%;
        height: 20%;
      }
    }
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
