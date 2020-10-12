import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  footer: {
    background: "#000",
    color: "white",
    paddingTop: "10px",
    paddingBottom: "10px",
    textAlign: "center",
  },
  textFo: {
    margin: "0"
  }
}));

export const Footer = () => {
    const classes = useStyles();
    const date = new Date();
    const year = date.getFullYear();
    // document.innerHTML = year;
    

    return(
        <div className={classes.footer} >
            <Typography variant="body2" className={classes.textFo}>Todos los Derechos Reservados.</Typography> 
            <Typography variant="body2" className={classes.textFo}>SaladTech {year} - Colombia</Typography>
        </div>
    )
}