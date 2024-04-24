import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store/modules/login";
import styled from "styled-components";

const HeaderPage = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    .img_box {
        width: 150px;
        height: 90px;
        img {
            width: 100%;
            object-fit: cover;
        }
    }
    .link_btn {
        display: flex;
        position: relative;
    }
    .link_btn a {
        color: black;
        text-decoration: none;
        margin: 10px 10px auto;
        &:hover {
            color: skyblue;
        }
    }
    .notis-container {
        position: relative;
        color: black;
        text-decoration: none;
        margin: 10px 10px auto;
    }
    .notis-box {
        position: absolute;
        width: 180px;
        max-height: 200px;
        background-color: #ffffffaf;
        border-radius: 5px;
        padding: 20px;
        display: ${(props) => (props.showNotis === "true" ? "block" : "none")};
        overflow-y: auto;

        box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
    }

    .notis-box ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    .notis-box ul li {
        margin-bottom: 10px;
    }

    .notis-box::-webkit-scrollbar {
        width: 8px;
    }

    .notis-box::-webkit-scrollbar-thumb {
        background-color: #d3d3d3;
        border-radius: 4px;
    }

    .notis-box::-webkit-scrollbar-thumb:hover {
        background-color: #a0a0a0;
    }
`;

export default function Header() {
    const dispatch = useDispatch();
    const [showNotis, setShowNotis] = useState(false);
    const notisRef = useRef();
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (notisRef.current && !notisRef.current.contains(event.target)) {
                setShowNotis(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleLogout = () => {
        dispatch(logout());
    };

    const toggleNotis = () => {
        setShowNotis(!showNotis);
    };

    return (
        <HeaderPage shownotis={showNotis ? "true" : "false"}>
            <div className="img_box">
                <Link to="/">
                    <img src="/images/logo.png" alt="" />
                </Link>
            </div>
            <div className="link_btn">
                <Link to="/games">게임</Link>
                <div className="notis-container">
                    <div ref={notisRef}>
                        <Link onClick={toggleNotis}>알림</Link>
                        <div className="notis-box">
                            <ul>
                                <li>알림 1</li>
                                <li>알림 2</li>
                                <li>알림 3</li>
                                <li>알림 1</li>
                                <li>알림 2</li>
                                <li>알림 3</li>
                                <li>알림 1</li>
                                <li>알림 2</li>
                                <li>알림 3</li>
                                <li>알림 3</li>
                                <li>알림 3</li>
                                <li>알림 3</li>
                                <li>알림 3</li>
                                <li>알림 3</li>
                                <li>알림 3</li>
                                <li>알림 3</li>
                                <li>알림 3</li>
                                <li>알림 3</li>
                                <li>알림 3</li>
                                <li>알림 3</li>
                                <li>알림 3</li>
                                <li>알림 3</li>
                                <li>알림 3</li>
                                <li>알림 3</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Link to="/users/mypage">마이페이지</Link>
                <Link to="/" onClick={handleLogout}>
                    로그아웃
                </Link>
            </div>
        </HeaderPage>
    );
}