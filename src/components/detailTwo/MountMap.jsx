/*global kakao*/
import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
const MountMap = () => {
  const mountList = useSelector((state) => state.twoSlice.mountain.data);
  useEffect(() => {
    var mapContainer = document.getElementById("map"), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(0, 0), // 지도의 중심좌표
        level: 9, // 지도의 확대 레벨
      };

    // 지도를 생성
    var map = new kakao.maps.Map(mapContainer, mapOption);

    // 주소-좌표 변환 객체를 생성
    var geocoder = new kakao.maps.services.Geocoder();

    // 주소로 좌표를 검색
    geocoder.addressSearch(`${mountList.juso}`, function (result, status) {
      // 정상적으로 검색이 완료됐으면
      if (status === kakao.maps.services.Status.OK) {
        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        // 결과값으로 받은 위치를 마커로 표시
        var marker = new kakao.maps.Marker({
          map: map,
          position: coords,
        });
        //  인포윈도우에 표출될 내용
        let infowindow = new kakao.maps.InfoWindow({
          content: `<div style="width:150px;text-align:center;padding:6px 0;">${mountList.name},<a href="https://map.kakao.com/link/to/${mountList.name},${result[0].y}, ${result[0].x}" style="color:blue" target="_blank">가는 길</a></div>`,
          position: new kakao.maps.LatLng(result[0].y, result[0].x),
        });
        // 인포윈도우 생성
        infowindow.open(map, marker);

        // 지도의 중심을 결과값으로 받은 위치로 이동
        map.setCenter(coords);
      }
    });
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
