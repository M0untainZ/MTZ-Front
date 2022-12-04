// import axios from "axios";

// // `${process.env.REACT_APP_AXIOS_API}

// const api = axios.create({
//      baseURL: `${process.env.REACT_APP_AXIOS_API}/api`,
// });

// api.interceptors.request.use(
//      function (config) {
//           console.log(config);
//           if (config.url !== "login") {
//                //토큰
//           }
//           console.log(config);
//           return config;
//      },
//      function (error) {
//           return Promise.reject(error);
//      }
// );

// export default api;

import axios from "axios";

export const axiosIns = axios.create({
    baseURL: `${process.env.REACT_APP_AXIOS_API}`,
});

axiosIns.interceptors.request.use(
    (config) => {
      const accessToken = sessionStorage.getItem("Access_Token");
      if (accessToken) {
        config.headers["Authorization"] = accessToken;
      }
      return config;
    }
)

export const getMain = async () => {
    const {data} = await axiosIns.get("/api/main");
    return data;
}

export const getProof = async () => {
    const {data} = await axiosIns.get("/api/photos");
    return data;
}

export const getRegionTag = async (region) => {
  const {data} = await axiosIns.get(`/api/mountains/${region}`);
  return data;
}

export const getSeasonTag = async (season) => {
  const {data} = await axiosIns.get(`/api/mountains/${season}`);
  return data;
}

export const getTimeTag = async (time) => {
  const {data} = await axiosIns.get(`/api/mountains/${time}`);
  return data;
}

export const getLevelTag = async (level) => {
  const {data} = await axiosIns.get(`/api/mountains/${level}`);
  return data;
}

export const kakaoLogin = async (code) => {
  const data = await axiosIns.get(`/kakao/callback?code=${code}`)
  return data;
}

// 필터
export const proofFilter = async (payload) => {
    console.log(payload)
    const {data} = await axiosIns.post("/api/photos/filter", payload);
    return data;
}

export const deleteProof = async (payload) => {
    const {data} = await axiosIns.delete("/api/photos/sakje", {
      data: {certificationId:payload.id, photo:payload.photo}
    });
    return data;
}