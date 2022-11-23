import React, { useState } from "react";
import styled from "styled-components";
import ImageUploading from "react-images-uploading";
import DetailTwoModal from "./modal/detailTwoModal";

const MountTest = () => {
  const [modal, setModal] = useState(false);

  const ModalSwitch = () => {
    setModal(!modal);
  };

  const [images, setImages] = useState([]);
  const maxNumber = 5;

  const onChange = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <>
      <StDiv>
        <StButton onClick={ModalSwitch}>등산 인증하기</StButton>
        {modal && (
          <DetailTwoModal
            open={modal}
            onClose={() => {
              setModal(false);
            }}
          >
            <StModalBox>
              <div className="fileBox">
                <>
                  <ImageUploading
                    multiple
                    value={images}
                    onChange={onChange}
                    maxNumber={maxNumber}
                    dataURLKey="data_url"
                  >
                    {({
                      imageList,
                      onImageUpload,
                      onImageRemove,
                      isDragging,
                      dragProps,
                    }) => (
                      // write your building UI
                      <StAddButtonBox className="upload__image-wrapper">
                        <StAddButton
                          style={
                            isDragging
                              ? {
                                  color: "red",
                                }
                              : undefined
                          }
                          onClick={onImageUpload}
                          {...dragProps}
                        >
                          <label className="uploadBox" for="file">
                            <div className="btn-upload"></div>
                            <div className="logo">사진 등록하기</div>
                          </label>
                        </StAddButton>
                        &nbsp;
                        {/* <button onClick={onImageRemoveAll}>Remove all images</button> */}
                        <StImgListBox>
                          {imageList.map((image, index) => (
                            <div key={index} className="image-item">
                              <img
                                src={image["data_url"]}
                                alt=""
                                className="prev-img"
                              />
                              <button
                                onClick={() => onImageRemove(index)}
                                className="deleteImg"
                              ></button>
                            </div>
                          ))}
                        </StImgListBox>
                      </StAddButtonBox>
                    )}
                  </ImageUploading>
                </>
              </div>

              <div className="buttonBox">
                <button className="addButton">인증하기</button>
                <button
                  className="cancelButton"
                  onClick={() => {
                    setModal(false);
                  }}
                >
                  취소하기
                </button>
              </div>
            </StModalBox>
          </DetailTwoModal>
        )}
      </StDiv>
    </>
  );
};

export default MountTest;

const StDiv = styled.div`
  background-color: red;
  .modalBox {
  }
`;

const StButton = styled.button`
  border: 1px solid white;
  border-radius: 5px;
  height: 30px;
  margin-right: 6%;
  padding-left: 10px;
  padding-right: 10px;
  color: white;
  background-color: rgba(255, 255, 255, 0.2);
`;

const StModalBox = styled.div`
  text-align: center;
  padding-top: 3%;
  font-weight: bold;
  .fileBox {
    height: 30vh;
    width: 40vh;
    background-color: #d9d9d9;
    display: flex;
    justify-content: center;

    .uploadBox {
      height: 12%;
      margin: auto;
    }
    .btn-upload {
      width: 40px;
      height: 40px;
      background-image: url("/icons/selectPicture.png");
      cursor: pointer;
      margin: auto;
    }
    .logo {
      font-size: small;
      cursor: pointer;
      margin-top: 10%;
    }
    .file {
      display: none;
    }
  }

  .buttonBox {
    width: 80%;
    margin-left: 25%;
    margin-top: 5%;
    .cancelButton {
      width: 40%;
      border-radius: 7px;
      border: 0.5px solid;
      margin-left: 5%;
    }
    .addButton {
      width: 40%;
      border-radius: 7px;
      border: 0.5px solid;
    }
  }
`;

const StAddButtonBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const StAddButton = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10%;
`;

const StImgListBox = styled.div`
  display: flex;
  .deleteImg {
    background-image: url("/icons/icon_cancel.png");
    background-color: rgba(0, 0, 0, 0);
    width: 24px;
    height: 24px;
    cursor: pointer;
    position: absolute;
    margin-left: -10%;
  }
  .prev-img {
    object-fit: cover;
    overflow: hidden;
  }
  .image-item {
    height: 30vh;
    width: 30vh;
    display: flex;
    justify-content: flex-end;
  }
  .image-item:nth-child(1) {
    height: 20vh;
    width: 20vh;
  }
  .image-item:nth-child(2) {
    height: 20vh;
    width: 20vh;
  }
  .image-item:nth-child(3) {
    height: 20vh;
    width: 20vh;
  }
`;
