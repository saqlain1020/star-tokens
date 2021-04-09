import React from 'react'
import Canvas from '../Canvas2/Canvas'
import Navbar from './../Components/Navbar/Navbar';
import MainContent from './../Components/MainContent/MainContent';

const Main = () => {
    return (
        <div className="main-section">
            <Navbar/>
            <MainContent/>            
            <Canvas style={{zIndex:-1}}/>
        </div>
    )
}

export default Main
