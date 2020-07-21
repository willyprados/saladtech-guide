import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {  img } from 'variables/general';

const useStyles = makeStyles(theme => ({
    imag: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '30px'
    },
    img: {
        width: "225px",
    },
    estadoPedido: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#009ADE',
        alignItems: 'center',
        color: 'white',
        fontSize: '1rem',
        marginBottom: '20px',
        alignSelf: 'stretch'
    }
}));


export const Header = () => {

    const classes = useStyles();
    console.log(img.data)
    return(
        <div>
            <div className={classes.imag}>
                <img className={classes.img} src={img.data} alt='microcircuitos'/>
            </div>
        </div>
    )
}