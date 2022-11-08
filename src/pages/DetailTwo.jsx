import React, { useState } from "react";
import Modal from "../common/modal/Modal";
import styled from "styled-components";

const DetailTwo = () => {
  const [modal, setModal] = useState(false);
  const ModalSwitch = () => {
    setModal(!modal);
  };
  return (
    <StContainer>
      <div>
        <div>지도</div>
      </div>
      <div>
        <div>산 정보 / 난이도 / 시간</div>
        <span>
          <button>좋아요</button>
        </span>
      </div>
      <div>
        <img></img>
        <img></img>
        <img></img>
        <img></img>
        <img></img>
        <img></img>
        <button>+99</button>
      </div>
      <div>
        <button onClick={ModalSwitch}>인증하기</button>
        {modal && (
          <Modal
            open={modal}
            onClose={() => {
              setModal(false);
            }}
          >
            <StModalBox>
              <div className="titleBox">
                <div>등산 갔음???</div>
              </div>
              <div className="imgBox">
                인증 사진
                <img></img>
              </div>
              <div className="addBox">
                <button>사진 추가하기</button>
              </div>
              <div className="buttonBox">
                <button
                  className="cancelButton"
                  onClick={() => {
                    setModal(false);
                  }}
                >
                  취소
                </button>
                <button className="addButton">등록</button>
              </div>
            </StModalBox>
          </Modal>
        )}
      </div>
    </StContainer>
  );
};

export default DetailTwo;

const StContainer = styled.div`
  text-align: center;
`;

const StModalBox = styled.div`
  text-align: center;
  padding-top: 3%;
  .titleBox {
    margin-bottom: 5%;
    font-size: xx-large;
  }
  .imgBox {
    height: 25vh;
    border: 1px solid;
  }
  .addBox {
    button {
      width: 100%;
      margin-top: 5%;
      border: 0.5px solid;
    }
  }
  .buttonBox {
    width: 40%;
    margin-left: 60%;
    margin-top: 10%;
    .cancelButton {
      width: 40%;
      border: 0.5px solid;
    }
    .addButton {
      margin-left: 15%;
      width: 40%;
      border: 0.5px solid;
    }
  }
`;
