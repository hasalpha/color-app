import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';

export default class PaletteList extends Component {
    render() {
        const {palettes} = this.props;
        return (
            <div>
                <h1>Palettes!</h1>
                {palettes.map(palette => <p><NavLink key={palette.id} exact to={`palette/${palette.id}`}>{palette.paletteName}</NavLink></p>)} 
            </div>
        )
    }
};