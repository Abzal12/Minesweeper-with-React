import React from 'react'
import './ControlPanel.css'
import smiley from './smiley-icon.svg'
import mine from './minesweeper.svg'
import logo from '../loading/bomb.svg'
import Moment from 'react-moment';
import moment from "moment";

function ControlPanel() {
    var str = '0:00';
    var d = new moment(str, 'HH:mm');
    let flagCounter = 10;
    return (
        <div className="controlPanel">
            <div><img src={mine} className="mine" alt="mine"/><span>{flagCounter}</span></div>
            {/*<img src={smiley} className="smiley" alt="smiley"/>*/}
            <button className="Reset">Reset</button>
            <span><Moment format="HH:mm">{d}</Moment></span>
        </div>
    )
}

export default ControlPanel;