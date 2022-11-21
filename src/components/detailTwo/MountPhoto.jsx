import React, { useState } from "react";
import styled from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useSelector } from "react-redux";
import ImgModal from "./imgModal/imgModal";
const MountPhoto = () => {
  const [modal, setModal] = useState(false);
  const ModalSwitch = () => {
    setModal(!modal);
  };

  const photoList = useSelector(
    (state) => state.twoSlice.mountain.data?.certificatedMountainList
  );

  return (
    <>
      <StContainer>
        <p>수락산을 등반한 MTZ들의 인증사진</p>
        <StImageList>
          <button className="img-btn prev">
            <IoIosArrowBack />
          </button>
          <button className="img-btn next">
            <IoIosArrowForward />
          </button>
          {photoList?.map((photoList, index) => (
            <img
              key={index}
              src={`${photoList.photo}`}
              alt=""
              onClick={ModalSwitch}
            />
          ))}
        </StImageList>
        {modal && (
          <ImgModal
            open={modal}
            onClose={() => {
              setModal(false);
            }}
          >
            <StModalBox>
              {photoList.map((photoList, index) => (
                <img key={index} src={`${photoList.photo}`} alt="" />
              ))}
            </StModalBox>
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
  justify-content: space-between;
  gap: 14px;
  align-items: center;
  overflow: hidden;
  /* border: 1px solid black; */
  img {
    width: 15vh;
    height: 15vh;
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
    margin-right: 20px;
    :hover {
      width: 45vh;
      height: 45vh;
    }
  }
`;
