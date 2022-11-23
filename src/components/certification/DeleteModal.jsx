import React from "react";
import styled from "styled-components";

const DeleteModal = ({setModalOn}) => {
    const closeModal = () => {
        setModalOn(false);
    }
    return (
        <StModal>
            <p>삭제 된 정보는 복구할 수 없습니다. 정말 삭제 하시겠습니까 ?</p>
            <button>확인</button>
            <button onClick={closeModal}>취소</button>
        </StModal>
    );
}

export default DeleteModal;

const StModal = styled.div`
    width: 15%;
    height: 15%;
    border: 1px solid black;
`;