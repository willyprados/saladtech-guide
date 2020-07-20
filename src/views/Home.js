import React, {useState, useRef} from 'react'
import { Redirect } from 'react-router-dom'
import { paths } from 'routes'
import { data } from 'variables/general'

const Home = () => {
  const [guiaValida, setGuiaValida] = useState(false);
  const [guia, setGuia] = useState('')

  const valueRef = useRef();

  const handleBuscar = () => {
    setGuia(valueRef.current.value)
    if(data.consignment === valueRef.current.value) {
      setGuiaValida(true);
    }
  };

  return (
    <div>
      <h1>Pagina principal</h1>
      <h2>Buscar guia</h2>
      <input ref={valueRef} />
      <button onClick={handleBuscar}>Buscar</button>
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
