import React, { Component } from 'react';
import './ColorBox.css'
import {CopyToClipboard} from 'react-copy-to-clipboard';
class ColorBox extends Component{
    constructor(props){
        super(props);
        this.state = {
            isCopied: false
        }
        this.handleCopy = this.handleCopy.bind(this);
    }

    handleCopy(){
        this.setState(curState => ({isCopied: true}));
        setTimeout(()=>{
            this.setState(curState => ({isCopied: false}));
        }, 1000);
    }

    render(){
        const {color, name} = this.props;
        const {isCopied} = this.state;
        return(
            <CopyToClipboard text={color} onCopy={this.handleCopy}>
            <div style={{backgroundColor: color}} className="ColorBox">
                <div style={{backgroundColor: color}} className={`copy-overlay ${isCopied && 'copying'}`}/>
                <div className={`copied-text ${isCopied && 'copying'}`}>
                    <h1>COPIED</h1>
                    <span>{color}</span>
                </div>
                <div className="color-name">
                    <span>{name}</span>
                </div>
                <button className="copy-button">Copy</button>
                <div className="more-button">
                    <span>MORE</span>
                </div>
            </div>
            </CopyToClipboard>
        );
    };
};

export default ColorBox;