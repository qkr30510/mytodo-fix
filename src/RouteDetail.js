// routes/Detail.js

import React, { useEffect } from "react";

const Detail = (props) => {
    useEffect(()=>{
        if (props.location.state === undefined){
            props.history.push("/");
        }
    })
     if (props.location.state){
        return <span>{props.location.state.title}</span>;
    } else {
        return null;
    }
}

export default Detail;