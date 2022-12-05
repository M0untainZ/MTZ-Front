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

axiosIns.interceptors.request.use((config) => {
     const accessToken = sessionStorage.getItem("Access_Token");
     if (accessToken) {
          config.headers["Authorization"] = accessToken;
     }
     return config;
});

export const getMain = async () => {
     const { data } = await axiosIns.get("/api/main");
     return data;
};

export const getProof = async () => {
     const { data } = await axiosIns.get("/api/photos");
     return data;
};

// //detail 1 list 불러오기
// export const getMountains = async () => {
//      const { data } = await axiosIns.get("/api/mountains");
//      return data;
// };

// export const postFilters = async (detailFilter) => {
//      const { data } = await axiosIns.post(
//           "/api/mountains/filter",
//           detailFilter
//      );
//      return data;
// };

// export const postFilter = async (dataFilter) => {
//     const {data} = await axiosIns.post("/api/photos/filter", dataFilter);
//     return data;
// }

// export const deleteProof = async () => {
//     const {data} = await axiosIns.delete("/photos/sakje");
//     return data;
// }
