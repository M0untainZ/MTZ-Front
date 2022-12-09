# 🌄 MTZ(마운틴즈)

</br>

> ### 프로젝트 소개

<pre> 초보 등린이부터 등산 전문가들까지! 등산러들을 위한 공간!</pre>

원하는 요소에 따라 **산의 리스트와 산의 정보**를 제공합니다. </br>
여러분의 등반 내역을 자랑해보아요!</br>
등산할 수 있는 산의 소개부터 여러분의 인증을 통한 뱃지 획득까지!</br>
랭킹 1위를 향해 등산해봅시다!</br>

</br>
</br>

> ### 프로젝트 문서
>
> | 내용          | 설명                                                                                                                   |
> | ------------- | ---------------------------------------------------------------------------------------------------------------------- |
> | 프로젝트 명   | MTZ(마운틴즈)                                                                                                          |
> | 프로젝트 기간 | 2022.11.03 ~ 2022                                                                                                      |
> | 베포 URL      |                                                                                                                        |
> | FE Github URL | https://github.com/M0untainZ/MTZ-Front.git                                                                             |
> | BE Github URL | https://github.com/M0untainZ/MTZ-BE.git                                                                                |
> | 프로젝트 문서 | [프로젝트 문서로 이동](https://docs.google.com/spreadsheets/d/1HtE2SUzSS5GC-LgEqoSsjKZNVe2-Jc1JQHZ8GDhCGHs/edit#gid=0) |

</br>
</br>

> ### 주요 기능

| PAGE          | FUNCTION                                                             |
| ------------- | -------------------------------------------------------------------- |
| MAIN          | 메인화면, 위치정보 기반 날씨, 추천 등산 코스, 랭킹, 인증 사진 리스트 |
| DETAIL 01     | 산 리스트, 산 리스트 필터, 무한 스크롤                               |
| DETAIL 02     | 각 산에 대한 정보, 카카오맵 기반 산의 위치, 인증 사진 리스트         |
| CERTIFICATION | 인증 사진 리스트, , 무한 스크롤                                      |
| MYPAGE        | 프로필 수정, 뱃지 리스트                                             |
| LOGIN         | 로그인, 회원가입, 소셜(카카오) 로그인                                |

</br>

### FE


### BE
JWT를 이용한 로그인 기능
간편한 소셜 로그인 카카오톡 지원
QueryDSL를 이용한 다양한 경우의 검색 요청 일괄 처리
Redis를 이용한 자주 조회하는 데이터 캐싱 처리
Slack Webhook, Logback를 이용한 배포된 서버의 에러 로그를 쉽게 확인 가능
Imgscalr를 이용한 S3 스토리지에 저장되는 이미지 리사이징 처리
Githib Action, S3, CodeDeploy를 이용한 CI/CD 자동 배포
Nginx를 이용한 무중단 배포

</br>

> ### 프로젝트 기술 정보

<pre>프론트에서 사용한 주요 기술 정보</pre>
<div>
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"/>
  <img src="https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=Axios&logoColor=white"/>
  <img src="https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=Redux&logoColor=white"/>
  <img src="https://img.shields.io/badge/styled--components-DB7093?style=flat-square&logo=styled-components&logoColor=white"/>
  
</div>

<br>

<pre>백엔드에서 사용한 주요 기술 정보</pre>

백엔드 개발환경 <br>
<img src="https://img.shields.io/badge/JAVA-006272?style=flat-square&logo=JAVA&logoColor=white"/>&nbsp;
<img src="https://img.shields.io/badge/Spring-13C100?style=flat-square&logo=Spring&logoColor=white"/>&nbsp;
<img src="https://img.shields.io/badge/Spring Boot-6DB33F?style=flat-square&logo=Spring Boot&logoColor=white"/>&nbsp;
<img src="https://img.shields.io/badge/SPRING DATA JPA-569A31?style=flat-square&logo=JSP&logoColor=white"/>&nbsp;
<img src="https://img.shields.io/badge/QueryDSL-527FFF?style=flat-square&logo=QueryDSL&logoColor=white"/>&nbsp;
<img src="https://img.shields.io/badge/Redis-DC382D?style=flat-square&logo=Redis&logoColor=white"/>
<img src="https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=MySQL&logoColor=white"/>&nbsp;

보안 <br>
<img src="https://img.shields.io/badge/JSON Web Tokens-A100FF?style=flat-square&logo=JSON Web Tokens&logoColor=white"/>&nbsp;
<img src="https://img.shields.io/badge/Spring Security-6DB33F?style=flat-square&logo=Spring Security&logoColor=white"/>&nbsp;

AWS <br>
<img src="https://img.shields.io/badge/Amazon EC2-FF9900?style=flat-square&logo=Amazon EC2&logoColor=white"/>
<img src="https://img.shields.io/badge/Amazon RDS-527FFF?style=flat-square&logo=Amazon RDS&logoColor=white"/>
<img src="https://img.shields.io/badge/Amazon S3-569A31?style=flat-square&logo=Amazon S3&logoColor=white"/>
<img src="https://img.shields.io/badge/Route53-FCC624?style=flat-square&logo=Route53&logoColor=white"/>&nbsp;
<img src="https://img.shields.io/badge/CodeDeploy-071D49?style=flat-square&logo=CodeDeploy&logoColor=white"/>&nbsp;
<img src="https://img.shields.io/badge/ELB-FF9900?style=flat-square&logo=ELB&logoColor=white"/>&nbsp;
<img src="https://img.shields.io/badge/Certificate Manager-C71D23?style=flat-square&logo=Certificate Manager&logoColor=white"/>&nbsp;

CI/CD <br>
<img src="https://img.shields.io/badge/GitHub Actions-2088FF?style=flat-square&logo=GitHub Actions&logoColor=white"/>
<img src="https://img.shields.io/badge/NGINX-009639?style=flat-square&logo=NGINX&logoColor=white"/>

# ERD
![erd](https://user-images.githubusercontent.com/111861625/204478746-b28e7f0d-58d5-4d2d-a789-4b1427bc9f14.png)

# 라이브러리
<img src = ""/>

# 트러블슈팅

# 팀원목록