import React from 'react'
import TypeWriterEffect from 'react-typewriter-effect';

function Main(props){
    return(
        <div>
            <TypeWriterEffect
                textStyle={{ fontFamily: 'Red Hat Display' }}
                startDelay={100}
                cursorColor="black"
                text="This is a single text"
                typeSpeed={100}
                scrollArea={myAppRef}
            />
        </div>

    )
}
export default Main