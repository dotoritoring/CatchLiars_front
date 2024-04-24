import styled from "styled-components";
import { Link } from "react-router-dom";
const Main = styled.div`
    align-content: center;
    flex: 1;
    background-color: #00154b;
    .game_box {
        width: 70%;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;

        .game1,
        .game2 {
            width: 25vw;
            border-radius: 20px;
            overflow: hidden;

            &:hover {
                border: 5px solid yellowgreen;
            }
        }
    }

    .game_box img {
        width: 100%;
        height: auto;
        border-radius: 20px;
    }
`;
export default function GameList() {
    return (
        <Main>
            <div className="game_box">
                <div className="game1">
                    <Link to="/games/list/mapia">
                        <img
                            src="https://img.danawa.com/prod_img/500000/032/935/img/13935032_1.jpg?shrink=330:*&_v=20210419150717"
                            alt=""
                        />
                    </Link>
                </div>
                <div className="game2">
                    <Link to="/games/list/catchliars">
                        <img
                            src="https://i.namu.wiki/i/ArUNQENRkTX5SjFpTZgBxJd2XoRhfTobswB6vn1aH72c5m2wOfvx4d_dsicMbtjw4Cgu3sc_NCZ4wNd9tGDQQOS96ySuF7m-WAXYgxovqUbN_U_-b-5TT1lXQV3oaNHYwCxehF7dOzDsXssc_1SLlA.webp"
                            alt=""
                        />
                    </Link>
                </div>
            </div>
        </Main>
    );
}
