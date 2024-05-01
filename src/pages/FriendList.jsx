import styled from "styled-components";
import axiosUtils from "../utils/axiosUtils";
import { useEffect, useState } from "react";
import Friend from "../components/mypage/Friend";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    flex: 1;
    background-color: #00154b;
    color: white;
    font-size: 100px;
`;

export default function FriendList() {
    const [friendList, setFriendList] = useState([]); // 친구 목록
    const [selectedFriendList, setSelectedFriendList] = useState([]); // 한 번에 보여줄 친구 목록
    const [selectedPage, setSelectedPage] = useState(1);
    const pageSize = 10; // 10으로 설정 할것.

    useEffect(() => {
        axiosUtils
            .get("/friends")
            .then((response) => {
                setFriendList(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        const start = (selectedPage - 1) * pageSize;
        const end = start + pageSize;
        setSelectedFriendList(friendList.slice(start, end));
    }, [selectedPage, friendList]);

    const handleDeleteFriend = (deletedFriendSeq) => {
        // 친구 삭제 로직
        const updatedFriends = friendList.filter((friend) => friend.u_seq !== deletedFriendSeq);
        setFriendList(updatedFriends); // 친구 목록 업데이트
    };

    const handleBtn = (page) => {
        setSelectedPage(page);
    };

    return (
        <>
            <Container>친구목록</Container>
            <Friend
                friendList={friendList}
                selectedFriendList={selectedFriendList}
                selectedPage={selectedPage}
                handleBtn={handleBtn}
                pageSize={pageSize}
                onDeleteFriend={handleDeleteFriend}
            />
        </>
    );
}