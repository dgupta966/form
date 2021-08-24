import React, { useState, useEffect } from "react";

const Api = () => {
  const [imgs, setImg] = useState([]);
  useEffect(() => {
    console.log('first use effect console');
})
  const clickHandler = () => {
    const Http = new XMLHttpRequest();
    const url = "https://dog.ceo/api/breeds/image/random";
    Http.open("GET", url);
    Http.send();
    Http.onload = () => {
      let a = JSON.parse(Http.responseText);
      //setImg(a);
      console.log(a);
      console.log(a.message);
      let tempArr = [...imgs];
      tempArr.push(a);
      setImg(tempArr);
    };

    // Http.onreadystatechange = (e) => {
    //   //console.log(Http.responseText);
    //   const a = Http.responseText;
    //   console.log(a);
    // };
  };
  return (
    <div>
      <button onClick={clickHandler}>Fetch API</button>
      {imgs.map((e) => {
        return <img alt={e.status} src={e.message} height="300" width="300" />;
      })}
    </div>
  );
};

export default Api;
