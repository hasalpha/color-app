import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';
import Navbar from './Navbar';

class Palette extends Component{
    constructor(props){
        super(props);
        this.state ={
            level: 500
        }
        this.changeLevel = this.changeLevel.bind(this);
    }

    changeLevel(level){
        this.setState({level});
    }

    render(){
        const {level} = this.state;
        const {colors} = this.props; 
        const colorBoxes = colors[`${level}`].map((color, i)=>{
            return <ColorBox key={i} name={color.name} color={color.hex} />
        })
        return(
            <div className="Palette">
                <Navbar level={level} changeLevel={this.changeLevel}/>
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