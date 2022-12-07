import styled from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Navigation } from "swiper/core";
import { useSelector } from "react-redux";
import React, { useEffect, useRef, useState } from "react";

const PhotoModal = () => {
  const photoList = useSelector(
    (state) => state.twoSlice.mountain.data?.certificatedMountainList
  );
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
        pagination: {
          clickable: true,
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
      <StModalBox>
        {swiperOptions && (
          <Swiper {...swiperOptions} className="swiper">
            {photoList.map((photoList, index) => (
              <SwiperSlide className="swiper-slide" key={index}>
                <img key={index} src={`${photoList.photo}`} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </StModalBox>
    </>
  );
};

export default PhotoModal;

const StModalBox = styled.div`
  padding-left: 10%;
  margin-top: -25px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  img {
    object-fit: cover;
    width: 35vh;
    height: 35vh;
    /* :hover {
      width: 45vh;
      height: 45vh;
    } */
  }
  .swiper {
    overflow: hidden;
    width: 100%;
  }
`;
