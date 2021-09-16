import React, {useState, useEffect} from 'react'

import './Home.css'

const Home = () => {

    const [checked, setChecked]=useState(false)
    useEffect(()=>{
        setChecked(true)
    },[checked])

    return (
        <div className="containerHomeBody">
                <div className="homeCard">
                    <h2 className="titleHome">Hi,</h2>
                    <h2 className="titleHome">I am Tomas Vergara</h2>
                    <p className="bodyHome">Front End web developer </p>
                </div>
        </div>
    )
}

export default Home
