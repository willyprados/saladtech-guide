import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
// // Cards
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
//  // icons fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faHome,
  faCalendarDay,
  faBox
} from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles(theme => ({
  iconUser: {
    color: "black",
    fontSize: "2rem",
    marginRight: "1rem"
  },
  textUser: {
    margin: "0",
    paddingTop: "0.5rem"
  },
  textUser2: {
    textTransform: "uppercase",
    fontSize: "1.5rem",
    paddingTop: "0.5rem"
  },
  divUser: {
    display: "flex",
    justifyContent: "center"
  },
  gridUser: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  cardCont: {
    paddingLeft: '0',
    paddingRight: '0',
  }
}));

export const InfoIdUser = ({ data }) => {
  const classes = useStyles();

  return (
    <>
      <Grid container  justify="center" className={classes.cardCont} >
        <Grid item xs={12} sm={3} >
          <Card >
            <CardContent className={classes.gridUser}>
              <div className={classes.divUser}>
                <FontAwesomeIcon className={classes.iconUser} icon={faUser} />
                <Typography variant="body1" className={classes.textUser}>
                  Nombre del destinatario
                </Typography>
              </div>
              <Typography variant="h6" className={classes.textUser2}>
                {data.addressee}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Card className={classes.root}>
            <CardContent className={classes.gridUser}>
              <div className={classes.divUser}>
                <FontAwesomeIcon className={classes.iconUser} icon={faHome} />
                <Typography variant="body1" className={classes.textUser}>
                  Dirección del destinatario:
                </Typography>
              </div>
              <Typography variant="h6" className={classes.textUser2}>
                {data.recipientAddress}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container justify="center">
        <Grid item xs={12} sm={3}>
          <Card className={classes.root}>
            <CardContent className={classes.gridUser}>
              <div className={classes.divUser}>
                <FontAwesomeIcon
                  className={classes.iconUser}
                  icon={faCalendarDay}
                />
                <Typography variant="body1" className={classes.textUser}>
                  Fecha de entrega
                </Typography>
              </div>
              <Typography variant="h6" className={classes.textUser2}>
                {data.deliveryDate}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Card className={classes.root}>
            <CardContent className={classes.gridUser}>
              <div className={classes.divUser}>
                <FontAwesomeIcon className={classes.iconUser} icon={faBox} />
                <Typography variant="body1" className={classes.textUser}>
                Estado del paquete
                </Typography>
              </div>
              <Typography variant="h6" className={classes.textUser2}>
                {data.stateBox}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};
