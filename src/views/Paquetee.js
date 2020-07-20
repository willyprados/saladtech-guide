import React from 'react'
import { Link, useParams } from "react-router-dom"
import { guiaParam, paths } from 'routes'
import { data } from 'variables/general'

const Paquete = () => {
  const param = useParams()
  const guia = param[guiaParam]

  

  return (
    <div>
      {(guia === data.consignment) && (
        <>
          <h1>Nombre destinatario</h1>
          <p>{data.addressee}</p>
          <h2>Fecha estimada de entrega</h2>
          <p>{data.deliveryDate}</p>
          <h2>bla, bla, bla.....</h2>
          <Link to={paths.home}>Buscar otra guia</Link>
        </>
      )}
      {(guia !== data.consignment) && (
        <>
          <h1>Guia no valida, regrese a la busqueda</h1>
          <Link to={paths.home}>Buscar otra guia</Link>
        </>
      )}
    </div>
  )
}

export default Paquete
