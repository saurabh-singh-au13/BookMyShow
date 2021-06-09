import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './style.css';


export const Show = (props) => {

    const [poster, setposter] = useState(" ")

    let apiUrl = `http://www.omdbapi.com/?t=${props.name}&apikey=d564a2c2`
    useEffect(() => {
        const getData = async () => {
            let info = await axios.get(apiUrl)
            console.log(info.data.Poster)
            setposter(info.data.Poster)
        }
        getData()
    }, [apiUrl])


    return (
        <>
            {poster ? <div className="d-flex justify-content-center align-items-center">
            <div className="card my-5 shadow-lg mb-5 bg-body rounded" style={{ width: "18rem" }}>
                <img src={poster} className="card-img-top" alt="poster" />
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div> </div>: null}
        </>
    )
}

export default Show