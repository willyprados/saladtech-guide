import React, {useState} from 'react'
import { Redirect } from 'react-router-dom'
import { paths } from 'routes'
import { data } from 'variables/general'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Header } from 'components/Header'

const useStyles = makeStyles(theme => ({
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    margin: '3rem'
  },
  input: {
    margin: '1rem'
  },
  divbtn: {
    display: 'flex',
    justifyContent: 'center'
  },
  btn: {
    background: '#659c35',
    '&:hover': {
      background: '#b4e689'
    }
  },
}))

const Home = () => {
  const classes = useStyles();
  const [guiaValida, setGuiaValida] = useState(false);
  const [guia, setGuia] = useState('')
  const [values, setValues] = useState('');
  const onChangeHandler = (e) => {
    setValues(e.target.value);
  };
  const handlerSudmit = (e) => {
    e.preventDefault();
    setGuia(values)
    if(data.consignment === values) {
      setGuiaValida(true);
    }
  };

  return (
    <div className={classes.content}>
      <Header/>
      <Typography variant='h4' className={classes.text}>Buscar Guía</Typography>
      <Typography variant='subtitle1' classes={classes.text}>Ingresa tu número de guía</Typography>
      <Typography variant='subtitle2' fontStyle='italic'>(modo prueba ingresar el número 1)</Typography>
      <form onClick={handlerSudmit}>
        <TextField className={classes.input} value={values} onChange={onChangeHandler} variant="outlined"></TextField>
        <br/>
        <div className={classes.divbtn}>
          <Button className={classes.btn} type='submit'>
            <Typography variant='button'>Buscar</Typography>
          </Button>
        </div>
      </form>
      {(guia && guiaValida) && (
        <Redirect to={`${paths.guia}/${guia}`} />
      )}
      {(guia && !guiaValida) && (
        <h3>Guia no valida, buscar de nuevo</h3>
      )}
    </div>
  )
}

export default Home
