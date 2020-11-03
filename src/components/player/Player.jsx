import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import Body from '../body/Body';
import Footer from '../footer/Footer'
import './Player.styles.scss';

function Player({ spotify }) {
    return (
        <div className="player">
            <div className="player__body">
                <Sidebar/>
                <Body/>
                <Footer/>
            </div>
          
        </div>
    )
}

export default Player
