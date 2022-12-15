import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useSelector } from "react-redux";
import ImgModal from "./imgModal/imgModal";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Navigation } from "swiper/core";
import PhotoModal from "./photoModal";
const MountPhoto = () => {
  const [modal, setModal] = useState(false);

  const ModalSwitch = () => {
    setModal(!modal);
  };
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
      <StContainer>
        <p>수락산을 등반한 MTZ들의 인증사진</p>

        <StImageList>
          <PrevBtn ref={prevRef} className="disabled">
            <IoIosArrowBack />
          </PrevBtn>
          {swiperOptions && (
            <Swiper {...swiperOptions} className="swiper">
              {photoList?.map((photoList, index) => (
                <SwiperSlide className="swiper-slide" key={index}>
                  <img
                    src={`${photoList.photo}`}
                    alt=""
                    onClick={ModalSwitch}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
          <NextBtn ref={nextRef} className="img-btn next">
            <IoIosArrowForward />
          </NextBtn>
        </StImageList>

        {modal && (
          <ImgModal
            open={modal}
            onClose={() => {
              setModal(false);
            }}
          >
            <PhotoModal />
          </ImgModal>
        )}
      </StContainer>
    </>
  );
};

export default MountPhoto;

const StContainer = styled.div`
  width: 70%;
  height: 20%;
  margin: 20px auto;
  box-sizing: border-box;
  position: relative;
  p {
    display: flex;
    margin-bottom: 10px;
  }
`;

const StImageList = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 14px;
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
