import React from 'react';
import Header from '../header/Header'
import './Body.styles.scss';

function Body({ spotify }) {
    return (
        <div className="body">
            <Header spotify={spotify}/>
        </div>
    )
}

export default Body
