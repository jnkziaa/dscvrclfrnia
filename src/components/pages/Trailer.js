import React from 'react';
import '../../App.css';
import '../trailer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap'
import YouTube from "react-youtube";


export default function Trailer() {
    const videoOptions = {
        height: '960',
        width: '1920',
        playerVars: {
            autoplay: 1,
            controls: 0,
            rel: 0,
            showinfo: 0,
            mute: 0,
            loop: 1
        }
    };
    return (
        <div>
        <Container>
            <div className="player-wrapper">
                <YouTube videoId="aiGHMWduSo4" opts={videoOptions} />
            </div>
        </Container>
    </div>
    );
}