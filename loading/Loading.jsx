import React from 'react';
import logo from './bomb.svg';
import './Loading.css'

function Loading() {
    return (
        <div>
            <header className="Loading">
                <p>Minesweeper</p>
                <img src={logo} className="App-logo" alt="logo"/>
            </header>
        </div>
    );
}

export default Loading;