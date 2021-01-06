import React from 'react'
import TypeWriterEffect from 'react-typewriter-effect';
import './main.css'

function Main(props){
    return(
    <div className='home-page'>
        <TypeWriterEffect
            textStyle={{ fontFamily: 'Roboto, sans-serif '}}\
            startDelay={2000}
            cursorColor="#3F3D56"
            multiText={[
            'Hey there, This is a type writer animation package',
            'it consist of two types...',
            'Single text display and multi text display',
            'Fonts can be customized.',
            'The type speed can be customized as well',
            ]}
            loop={true}
            nextTextDelay={1000}
            typeSpeed={30}
        />
    </div>

    )
}
export default Main