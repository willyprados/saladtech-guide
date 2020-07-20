import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {InfoIdUser} from 'components/InfoIdUser';
import {InfBox} from 'components/InfBox';
import {InfGuide} from 'components/InfGuide';
import {Footer} from 'components/Footer';
import {Header} from 'components/Header'
import {HeaderTwo} from 'components/HeaderTwo'
import { data, img } from 'variables/general';
import { Title } from 'components/Title';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
// routes
import { Link, useParams } from "react-router-dom"
import { guiaParam, paths } from 'routes'

const useStyles = makeStyles(theme => ({
  text: {
    textDecoration: 'none',
    color: 'black',
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '2rem',
  },
}))

export const Guia = () => {
  const param = useParams();
  const guia = param[guiaParam];
  const classes = useStyles();
  

  return (
    <div> 
      {(guia === data.consignment) && (
        <>
          <Header data={img}/>
          {/* <HeaderTwo/> */}
          <Title/>
          <InfoIdUser data={data}/>
          <InfBox data={data}/>
          <InfGuide data={data}/>
          <div className={classes.button}>
            <Button variant="contained">
              <Link to={paths.home} className={classes.text}>Buscar otra guia</Link>
            </Button>
          </div>
          <Footer/>
        </>
      )}
      {(guia !== data.consignment) && (
        <>
          <Typography variant='h5' align='center' >Guia no valida, regrese a la busqueda</Typography>
          <div className={classes.button}>
            <Button variant="contained">
              <Link to={paths.home} className={classes.text}>Buscar otra guia</Link>
            </Button>
          </div>
        </>
      )}
    </div>
  )
}

