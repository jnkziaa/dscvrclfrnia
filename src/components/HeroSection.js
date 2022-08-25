import React from 'react';
import '../App.css';
import {Button, TrailerButton} from './Button';
import './HeroSection.css';


function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/video-3.mp4' autoPlay loop muted />
            <h1>California is Waiting</h1>
            <p>What are you waiting for?</p>
            <div className='hero-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    GET STARTED
                </Button>
                <TrailerButton
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                >
                    WATCH TRAILER <i className='far fa-play-circle'/>
                </TrailerButton>
            </div>
        </div>
    );
}

export default HeroSection;