import React, { useState, useEffect } from "react";
import axios from "axios"

const Card = ({title, details, author}) => {
    return (
        <div >
            <h1>{`Title: ${title}`}</h1>
            <h1>{`Details: ${details}`}</h1>
            <h1>{`Author: ${author}`}</h1>
        </div>
    )
}

export default function Check(){
    const [data, setData] = useState([]);

    const getData = async () => {
        try {
        const { data } = await axios.get("https://adg-rec-task-1.herokuapp.com/");
        if (data) setData(data)
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getData()
    });

    return(
        <div className="content">
            {
                data.map(d => {
                    const {title, details, author} = d;
                    return <Card title={title} details={details} author={author}/>
                })
            }
        </div>
    )
}