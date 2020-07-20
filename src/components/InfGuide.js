import React from 'react';
import { makeStyles } from '@material-ui/core/styles'; // useTheme
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import 'typeface-roboto';
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
  divCont: {
    marginBottom: '2rem',
  },
  panelExpan: {
    background: '#659c35',
    color: 'white',
    textAlign: 'center',
  },
  gridCont: {
    background: 'white',
    color: 'black'
  },
  textExpan: {
    margin: '0',
    paddingTop: '1.3rems',
    textAlign: 'center',
  },
  root: {
    flexGrow: 1,
    padding: '8px',
  },
  root2: {
    width: '80%',
  },
  paper: {
    textAlign: 'center',
  },
  table: {
    minWidth: 500,
  },
}));

export const InfGuide = ({data}) => {
  const classes = useStyles();  

  return (
    <Grid container justify="center" className={classes.divCont}>
      <div className={classes.root2}>
        <ExpansionPanel className={classes.panelExpan}>
        <ExpansionPanelSummary>
          <Typography variant="h6" align="center" className={classes.textExpan}>Historial del rastreo - Guía # 9563486443</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.root}>
            <Grid container spacing={2} className={classes.gridCont}>
                <Grid item xs={12}>
                    <Typography variant="subtitle1" className={classes.paper}>{data.orderTraceability[0].state + " - " + data.orderTraceability[0].date}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="subtitle1" className={classes.paper}>{data.orderTraceability[1].state + " - " + data.orderTraceability[1].date}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="subtitle1" className={classes.paper}>{data.orderTraceability[2].state + " - " + data.orderTraceability[2].date}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="subtitle1" className={classes.paper}>{data.orderTraceability[3].state + " - " + data.orderTraceability[3].date}</Typography>
                </Grid>
            </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      </div>
    </Grid>
  );
}