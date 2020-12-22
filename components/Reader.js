import React, { Component, useState, useEffect } from "react";
import { w3, fireRead, fireWrite, fireCreate } from '../helpers/firechain.js'

const Reader = (props) => {
  const [key, setKey] = useState('testKey')
  const [value, setValue] = useState('')


  function handleClick() {
      fireRead(key).then(setValue);
  }
  return (
      <div>
    <input type="text" placeholder="key" value={key} onChange={(e)=>setKey(e.target.value)}/>
      <button onClick={handleClick}>Read</button>
      <span>{value}</span>
    </div>
  );
};
export default Reader;
