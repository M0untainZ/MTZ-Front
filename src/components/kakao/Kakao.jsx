import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { kakaoLogin } from "../../shared/api";

const Kakao = () => {
    const navigate = useNavigate();
    const code = new URL(window.location.href).searchParams.get("code");

    useEffect(() => {
        kakaoLogin(code).then((res) => {
            sessionStorage.setItem("Access_Token", res.headers.authorization);
            sessionStorage.setItem("Refresh_Token", res.headers.refresh_token);
            sessionStorage.setItem("userinfos", JSON.stringify(res.data.data));
            navigate("/")
        });
    }, []);
    
    return (
        <div>카카오</div>
    );
}

export default Kakao;