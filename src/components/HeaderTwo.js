import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'


const useStyles = makeStyles(theme => ({
    text: {
        // display: 'flex',
        // flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center',
        paddingLeft: '2rem', 
        paddingRight: '2rem',
        paddingBottom: '0.5rem',
        paddingTop: '0.5rem',
        fontSize: '1rem',
        // backgroundColor: '#009ADE',
        color: 'black',
        alignSelf: 'stretch',
        marginBottom: '20px',
    },
}));


export const HeaderTwo = ({data}) => {

    const classes = useStyles();

    return(
        <div>
            <Typography variant='body1' align='center' className={classes.text}>
            "Especializados en la fabricación, ensamble de tu PCB y asesoramos en la creación de tu proyecto electrónico"
            </Typography>
        </div>
    )
}