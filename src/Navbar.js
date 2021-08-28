import React, { Component } from 'react';
import Slider from 'rc-slider';
import './Navbar.css';
import 'rc-slider/assets/index.css';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
class Navbar extends Component{
    constructor(props){
        super(props);
        this.state = {
            format: this.props.format,
            open: false
        }
        this.handleFormatChange = this.handleFormatChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleFormatChange(e){
        this.setState(curState => ({format: e.target.value, open: true}));
        this.props.changeFormat(e.target.value);
    }

    handleClick(e){
        this.setState({open:false});
    }

    render(){
        const {level, changeLevel} = this.props;
        return(
            <div className="Navbar">
                <div className="logo">
                    <a href="/">React Color Palette</a>
                </div>
                <p className="level">Level: {level}</p>
                <div className="slider-div">
                    <Slider defaultValue={level} min={100} max={900} step={100} onAfterChange={changeLevel} />
                </div>
                <div className="color-format-select">
                    <Select value={this.state.format} onChange={this.handleFormatChange}>
                        <MenuItem value="hex">HEX - #FFFFFF</MenuItem>
                        <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
                        <MenuItem value="rgba">RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
                    </Select>
                </div>
                <Snackbar 
                    anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}
                    open={this.state.open}
                    autoHideDuration={3000}
                    message={<span id="message-id">Format changed to {this.state.format.toUpperCase()}</span>}
                    onClose={this.handleClick}
                    ContentProps={{"aria-describedby":"message-id"}}
                    action={
                        <IconButton>
                            <CloseIcon onClick={this.handleClick} style={{fill:'white'}} key='close' aria-label='close' />
                        </IconButton>
                    }
                >
                </Snackbar>

            </div>
        )
    }
}

export default Navbar;