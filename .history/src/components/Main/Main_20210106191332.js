import React from 'react'
import TypeWriterEffect from 'react-typewriter-effect';

function Main(props){
    return(
    <div>
        <TypeWriterEffect
            textStyle={{ fontFamily: 'Roboto, sans-serif '}}
            startDelay={300}
            cursorColor="black"
            text="This is a single text"
            typeSpeed={100}
        />
    </div>

    )
}
export default Main