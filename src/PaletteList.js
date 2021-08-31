import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import { withStyles } from '@material-ui/styles';

const styles = {
    main:{
        backgroundColor: 'hsl(250, 100%, 70%)',
        "& h1":{
            margin:'0'
        }
    }
}

class PaletteList extends Component {
    render() {
        const {palettes, classes} = this.props;
        return (
            <div className={classes.main}>
                <h1>Palettes!</h1>
                <div>{palettes.map(palette => <MiniPalette {...palette}/>)}</div>
            </div>
        )
    }
};

export default withStyles(styles)(PaletteList)