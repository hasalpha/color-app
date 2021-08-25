import React, { Component } from 'react';
import Slider from 'rc-slider';
import './Navbar.css';
import 'rc-slider/assets/index.css';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
class Navbar extends Component{
    constructor(props){
        super(props);
        this.state = {
            format: this.props.format
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState(curState => ({format: e.target.value}));
        this.props.changeFormat(e.target.value);
    }

    render(){
        const {level, changeLevel} = this.props;
        return(
            <div className="Navbar">
                <div className="logo">
                    <a href="/">React Color Palette</a>
                </div>
                <p>Level: {level}</p>
                <div className="slider-div">
                    <Slider defaultValue={level} min={100} max={900} step={100} onAfterChange={changeLevel} />
                </div>
                <div className="color-format-select">
                    <Select value={this.state.format} onChange={this.handleChange}>
                        <MenuItem value="hex">HEX - #FFFFFF</MenuItem>
                        <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
                        <MenuItem value="rgba">RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
                    </Select>
                </div>
            </div>
        )
    }
}

export default Navbar;