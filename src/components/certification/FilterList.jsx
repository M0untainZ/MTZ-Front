import React, {useState} from "react";
import styled from "styled-components";

const FilterList = () => {
    const [checkValue, setCheckValue] = useState("");
    const regionList = [
        { id: 0, value: "서울" },
        { id: 1, value: "강원" },
        { id: 2, value: "경기" },
        { id: 3, value: "충청" },
        { id: 4, value: "경상" },
        { id: 5, value: "전라" },
        { id: 6, value: "제주" }
    ];

    const mtList = {
        "서울": ["관악산", "북한산", "아차산", "도봉산", "수락산", "인왕산", "북악산", "남산"],
        "강원": ["설악산", "치악산", "태백산", "오대산"],
        "경기": ["명성산", "백운산", "마니산", "감악산", "소요산", "운악산", "명지산", "축령산", "유명산", "용문산"],
        "충청": ["속리산", "월악산", "소백산", "계룡산"],
        "경상": ["팔공산", "대야산", "비슬산", "덕유산", "금정산"],
        "전라": ["지리산", "대둔산", "조계산"],
        "제주": ["한라산"]
    };
    //체크박스 하나만 선택되게 하기
    // const onIsCheck = (isChecked) => {
    //     const checkBox = document.getElementsByClassName("region");
    //     for (let i = 0; i < checkBox.length; i++) {
    //         if (checkBox[i] !== isChecked) checkBox[i].checked = false;
    //     }
    // };
    const onCheckHanlder = (radioBtnValue) => {
        setCheckValue(radioBtnValue);
    }

    return (
        <StFilterContainer>
            <div className="filter-box">
                <p>상세조건</p>
                <div className="filter-btn">
                    <button>초기화</button>
                    <button>적용</button>
                </div>
            </div>
            <p>지역선택</p>
            <div className="region-list">
                {regionList.map((el) => (
                    <label key={el.id}>
                        <StyledInput 
                            type="radio" 
                            name="region" 
                            className="region" 
                            checked={checkValue === el.value}
                            onChange={() => onCheckHanlder(el.value)} 
                        />
                        {el.value}
                    </label>
                ))}    
            </div>
            <div className="select-list">
                
            </div>
        </StFilterContainer>
    );
}

export default FilterList;

const StFilterContainer = styled.div`
    width: 260px;
    height: 550px;
    border: 1px solid black;
    font-size: 18px;
    .filter-btn {
        display: flex;
        justify-content: space-between;
        button {
            width: 128px;
            height: 25px;
        }
    }
    .region-list {
        display: flex;
        flex-wrap: wrap;
    }
`;

const StyledInput = styled.input`
    /* appearance: none;
    border: 1px solid #858484;
    border-radius: 2px;
    width: 15px;
    height: 15px;
    &:checked {
        background-color: #757575;
        background-size:100%;
        background-position: 50%;
        background-repeat: no-repeat;
        background-image: url("/icons/vector.png");
    } */
`;