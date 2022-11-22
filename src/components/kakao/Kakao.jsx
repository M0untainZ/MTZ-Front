import React, {useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Kakao = () => {
    const navigate = useNavigate();
    const params = new URL(document.location.toString()).searchParams;
    const code = params.get("code"); // 인가코드 받는 부분
    const grant_type = "authorization_code";
    const client_id = "cc12618ddc81cd5d765c74e98974c11b";

    axios.post(`https://kauth.kakao.com/oauth/token?
        grant_type=${grant_type}
        &client_id=${client_id}
        &redirect_uri=http://localhost:3000/oauth/callback/kakao
        &code=${code}`
        , {
    headers: {
        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
    }).then(res => res.json())
        .then((data) => {
            if (data.access_token) {
            localStorage.setItem("token", data.access_token);
            } else {
            navigate("/")
            }
        })

    return (
        <></>
    );
}

export default Kakao;