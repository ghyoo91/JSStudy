import React from "react";
import {Link} from "react-router-dom";

export default function First({ history }) {
    console.log(history);

    return (
        <div style={{
            marginTop: "500px",
        }}>
            <button onClick={() => history.push('/sec')}>Second 이동</button>
            <Link to="/sec" style={{
                marginTop: "100px",
            }}>
                <button>
                    이아이는 Link를 사용합니다. Second로 가시죠.
                </button>
            </Link>
        </div>
    );
}
