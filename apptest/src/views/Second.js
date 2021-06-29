import React from "react";
import {Link} from "react-router-dom";

export default function Second({ history }) {
    console.log(history);

    return (
        <div style={{
            marginTop: "500px",
        }}>
            <button onClick={() => history.push('/')}>First로 이동</button>
            <Link to="/" style={{
                marginTop: "100px",
            }}>
                <button>
                    이아이는 Link를 사용합니다. First로 가시죠.
                </button>
            </Link>
        </div>
    );
}
