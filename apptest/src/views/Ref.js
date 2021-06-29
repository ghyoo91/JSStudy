import React, {useEffect, useRef, useState} from "react";
import Counter from "./Counter";

export default function Ref(props) {
    const [visibility, setVisibility] = useState(true);

    const onChnageVisibility = () => {
      setVisibility(!visibility);
    };

    return (
      <div>
        <button onClick={onChnageVisibility}>ChangeVisibility</button>
        {visibility && <Counter />}
      </div>
    );
}
