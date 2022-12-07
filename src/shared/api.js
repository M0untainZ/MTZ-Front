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

export const kakaoLogin = async (code) => {
  const data = await axiosIns.get(`/kakao/callback?code=${code}`)
  return data;
}

export const proofFilter = async (payload) => {
    const {data} = await axiosIns.post("/api/photos/filter", payload);
    return data;
}

export const deleteProof = async (payload) => {
    const {data} = await axiosIns.delete("/api/photos/sakje", {
      data: {certificationId:payload.id, photo:payload.photo}
    });
    return data;
}