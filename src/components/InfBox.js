import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';



const useStyles = makeStyles(theme => ({
  divCont: {
    marginBottom: '2rem',
    marginTop: '2rem',
  },
  gridCont: {
    background: 'white',
    color: 'black'
  },
  textExpan: {
    margin: '0',
    paddingTop: '1.3rems'

  },
  panelExpan: {
    background: '#659c35',
    color: 'white',
    justifyContent: 'center',
  },
  root: {
    flexGrow: 1,
    padding: '8px',
  },
  root2: {
    width: '80%',
  },
  info: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  paper: {
    textAlign: 'center',
  },
  content: {
    justifyContent: 'center',
  },
}));

export const InfBox = ({data}) => {
  const classes = useStyles();

  return (
    <Grid container justify="center" className={classes.divCont} >
        <div className={classes.root2}>
          <ExpansionPanel className={classes.panelExpan}>
            <ExpansionPanelSummary
              content={classes.content}
              className={classes.textExpan}
            >
              <Typography variant='h6' align='center' justify="center"  >Más información sobre el pedido</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.root}>
              <Grid container spacing={2} className={classes.gridCont} >
                <Grid item xs={12} sm={3}>
                  <Typography variant="subtitle1" className={classes.paper}>Remesa</Typography>
                  <Typography variant="h6" className={classes.paper}>{data.consignment}</Typography>
                </Grid>
                <Divider light />
                <Grid item xs={12} sm={3}>
                  <Typography variant="subtitle1" className={classes.paper}>Unidad</Typography>
                  <Typography variant="h6" className={classes.paper}>{data.unit}</Typography>
                </Grid>
                <Divider light />
                <Grid item xs={12} sm={3}>
                  <Typography variant="subtitle1" className={classes.paper}>Origen</Typography>
                  <Typography variant="h6" className={classes.paper}>{data.origin}</Typography>
                </Grid>
                <Divider light />
                <Grid item xs={12} sm={3}>
                  <Typography variant="subtitle1" className={classes.paper}>Destino</Typography>
                  <Typography variant="h6" className={classes.paper}>{data.destination}</Typography>
                </Grid>
                <Divider light />
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle1" className={classes.paper}>Despachado el</Typography>
                  <Typography variant="h6" className={classes.paper}>{data.dispatchedDate}</Typography>
                </Grid>
                <Divider light />
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle1" className={classes.paper}>Documento Remitente</Typography>
                  <Typography variant="h6" className={classes.paper}>{data.senderDocument}</Typography>
                </Grid>
              </Grid>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
    </Grid>
  );
}