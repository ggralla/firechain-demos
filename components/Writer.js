import React, { Component, useState, useEffect } from "react";
import { fireWrite} from '../helpers/firechain.js'

const Writer = (props) => {
    const [key, setKey] = useState('testKey')
    const [value, setValue] = useState('testValue');

    function handleClick() {
        fireWrite(key,value)

    }

    return (
        <div>
            <input type="text" placeholder="key" value={key} onChange={(e)=>setKey(e.target.value)} />
            <input type="text" placeholder="value" value={value} onChange={(e) => setValue(e.target.value)}/>
            <button onClick={handleClick}>Write</button>
        </div>
    );
}
export default Writer;
