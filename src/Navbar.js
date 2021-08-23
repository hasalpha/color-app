import React, { Component } from 'react';
import Slider from 'rc-slider';
import './Navbar.css';
import 'rc-slider/assets/index.css';
class Navbar extends Component{
    render(){
        const {level, changeLevel} = this.props;
        return(
            <div className="Navbar">
                <div className="logo">
                    <a href="#">React Color Palette</a>
                </div>
                <p>Level: {level}</p>
                <div className="slider-div">
                    <Slider defaultValue={level} min={100} max={900} step={100} onAfterChange={changeLevel} />
                </div>
            </div>
        )
    }
}

export default Navbar;