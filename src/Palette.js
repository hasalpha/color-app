import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';
import Navbar from './Navbar';

class Palette extends Component{
    constructor(props){
        super(props);
        this.state ={
            level: 500,
            format: "hex"
        }
        this.changeLevel = this.changeLevel.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
    }

    changeFormat(value){
        this.setState(curState => ({format: value}));
    }

    changeLevel(level){
        this.setState({level});
    }

    render(){
        const {level} = this.state;
        const {colors} = this.props; 
        const colorBoxes = colors[`${level}`].map((color, i)=>{
            return <ColorBox key={i} name={color.name} color={color[this.state.format]} />
        })
        return(
            <div className="Palette">
                <Navbar level={level} changeLevel={this.changeLevel} changeFormat={this.changeFormat} format={this.state.format}/>
                <div className="Palette-colors">
                    {colorBoxes}
                </div>
                <div className="Palette-footer">

                </div>
            </div>
        );
    };
};

export default Palette;