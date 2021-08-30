import React from 'react';
import {withStyles} from '@material-ui/styles';
import { NavLink } from 'react-router-dom';     

const styles = {
    root:{
        border: '1px solid black',
        color: 'black',
        borderRadius: '12px',
        boxShadow: '2px 1px',
        textAlign: 'center',
        position:'relative',
        width:'20%',
        float:'left',
        left:'150px',
        margin: '10px',
        marginRight:'90px',
        "&:hover":{
            cursor: 'pointer'
        }
    },
    title:{
        fontWeight:'bolder',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 1rem',
        "& span": {
            fontWeight: 'lighter',
            float: 'right',
            marginRight: '1rem',
            fontSize: '1.5rem'
        }
    },
    colors:{
        display:'flex',
        flexWrap: 'wrap',
        justifyContent:'flex-start',
        alignItems:'center',
        height:'3em',
        width:'10em',
        margin: 'auto',
        marginBottom: '80px',
        marginTop: '2px'
    }
};

function MiniPalette(props){
    const {classes, colors, paletteName, emoji, id} = props;
    return(
        <NavLink to={`/palette/${id}`}>
        <div className={classes.root}>
            <div className={classes.colors}>
                {colors.map(color=><div style={{backgroundColor:color.color, width:'2em', height: '2em'}}></div>)}
            </div>
            <p className={classes.title}>{paletteName}<span className={classes.emoji}>{emoji}</span></p>
        </div>
        </NavLink>
    )
};

export default withStyles(styles)(MiniPalette);