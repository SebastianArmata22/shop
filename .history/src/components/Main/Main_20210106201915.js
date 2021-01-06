import React from 'react'
import TypeWriterEffect from 'react-typewriter-effect';
import './main.css'
import { Button } from '@material-ui/core';

function Main(props){
    return(
    <div className='home-page'>
        <div>
        <TypeWriterEffect
            textStyle={{ fontFamily: 'Roboto, sans-serif ', color:'#ffffff'}}
            startDelay={2000}
            cursorColor="#3F3D56"
            multiText={[
            'Are you looking for a new smartphone?',
            'Great!!!',
            'We have great smartphones at great prices',
            'Click on the button and see for yourself...',
            ]}
            loop={true}
            nextTextDelay={1000}
            typeSpeed={100}
        />
        </div>
        <Button variant="outlined" color="primary">
            Smartphones
        </Button>
    </div>

    )
}
export default Main