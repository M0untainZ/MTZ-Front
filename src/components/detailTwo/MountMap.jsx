/*global kakao*/
import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
const MountMap = () => {
  const mountList = useSelector((state) => state.twoSlice.mountain.data);
  const lat = mountList.latitude;
  const lng = mountList.longitude;
  console.log(lat, lng);
  useEffect(() => {
    let mapContainer = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
    let mapOption = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(lat, lng), //지도의 중심좌표.
      level: 8, //지도의 레벨(확대, 축소 정도)
    };
    //지도 생성 및 객체 리턴
    let map = new kakao.maps.Map(mapContainer, mapOption);
    // 마커가 표시될 위치
    let markerPosition = new kakao.maps.LatLng(lat, lng);
    // 마커를 생성
    let marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    // 마커가 지도 위에 표시되도록 설정
    marker.setMap(map);
    // 인포윈도우에 표출될 내용, HTML 문자열이나 document element가 가능
    let iwContent = `<div style= "font-size:small, padding:5px;">${mountList.name} <br> <a href="https://map.kakao.com/link/to/${mountList.name},${lat}, ${lng}" style="color:blue" target="_blank">가는 길</a></div>`,
      //인포윈도우 표시 위치
      iwPosition = new kakao.maps.LatLng(lat, lng);

          // 인포윈도우를 생성
          let infowindow = new kakao.maps.InfoWindow({
               position: iwPosition,
               content: iwContent,
          });

          // 마커 위에 인포윈도우를 표시
          infowindow.open(map, marker);
     }, []);

     return (
          <>
               <StMap id="map"></StMap>
          </>
     );
};

export default MountMap;

const StMap = styled.div`
     width: 40vh;
     height: 300px;
     margin-top: 3%;
     margin-bottom: 3%;
`;
