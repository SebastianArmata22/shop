import React from 'react'
import TypeWriterEffect from 'react-typewriter-effect';

function Main(props){
    return(
    <div className='home-page'>
        <TypeWriterEffect
            textStyle={{ fontFamily: 'Roboto, sans-serif '}}
            startDelay={500}
            cursorColor="black"
            text="Find your dream smartphone..."
            typeSpeed={100}
        />
    </div>

    )
}
export default Main