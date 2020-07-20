import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  estadoPedido: {
    backgroundColor: "#659c35",
    color: "white",
    fontSize: "1rem",
    marginBottom: "2rem",
    // alignItems: 'center',
    // alignSelf: "stretch"
  }
}));

export const Title = () => {
  const classes = useStyles();

  return (
    <Grid item sm={12} className={classes.estadoPedido}>
      <Typography variant="h5" align='center'>Estado de su pedido</Typography>
    </Grid>
  );
};
