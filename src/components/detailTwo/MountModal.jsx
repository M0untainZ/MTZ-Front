import React, { useState } from "react";
import styled from "styled-components";
import Modal from "../../common/modal/Modal";

const MountModal = () => {
  const [modal, setModal] = useState(false);
  const ModalSwitch = () => {
    setModal(!modal);
  };

  return (
    <>
      <div>
        <StButton onClick={ModalSwitch}>등산 인증하기</StButton>
        {modal && (
          <Modal
            open={modal}
            onClose={() => {
              setModal(false);
            }}
          >
            <StModalBox>
              <div className="titleBox">
                <div>당신의 등산을 인증해주세요</div>
                <div className="logo">
                  하단의 [사진 등록하기]를 눌러 사진을 고른 뒤,
                </div>
                <div className="logo">
                  [인증하기] 버튼을 눌러 업로드하면 인증 완료!
                </div>
              </div>
              <div className="imgBox">
                <input type="file" />
                <img></img>
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
          </Modal>
        )}
      </div>
    </>
  );
};

export default MountModal;

const StButton = styled.button`
  border: 1px solid white;
  border-radius: 5px;
  height: 30px;
  margin-right: 4%;
  padding-left: 10px;
  padding-right: 10px;
  color: white;
  background-color: rgba(255, 255, 255, 0.2);
`;

const StModalBox = styled.div`
  text-align: center;
  padding-top: 3%;
  font-weight: bold;
  .titleBox {
    margin-bottom: 10%;
    font-size: large;
    .logo {
      font-size: x-small;
    }
  }
  .imgBox {
    height: 30vh;
    border: 1px solid;
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
