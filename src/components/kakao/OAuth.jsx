import React from "react";

const OAuth = () => {
    const KAKAO_CLIENT_ID = "cc12618ddc81cd5d765c74e98974c11b";
    const KAKAO_REDIRECT_URL = "http://localhost:3000/oauth/callback/kakao";
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URL}&response_type=code`;

    return (
        <a href={KAKAO_AUTH_URL}>
            <img src="/icons/kakao_login.png" alt="" />
        </a>
    );
}

export default OAuth;