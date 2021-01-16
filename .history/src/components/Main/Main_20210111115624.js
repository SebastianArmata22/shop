import React from 'react'
import TypeWriterEffect from 'react-typewriter-effect';
import './main.css'
import { BrowserRouter, Route, Link } from 'react-router-dom';

function Main(props){
    return(
    <div className='home-page'>
        <div>
        <TypeWriterEffect
            textStyle={{ fontFamily: 'Roboto, sans-serif ', color:'#ffffff'}}
            startDelay={1000}
            cursorColor="#3F3D56"
            multiText={[
            'Are you looking for a new smartphone?',
            'Great!!!',
            'We have the cheapest price',
            'Click on the button and see for yourself...',
            ]}
            loop={true}
            nextTextDelay={1000}
            typeSpeed={100}
        />
        </div>
        <Link to="/products">
        <button className='btn'>
            Smartphones
        </button>
        </Link>
    </div>

    )
}
export default Main