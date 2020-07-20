import Home from 'views/Home'
// import {Paquete} from 'views/Paquete'
import { Guia } from 'views/Paquete'

const home = '/'
const guia = '/Guia'

export const guiaParam = 'guia'

export const paths = {
  home,
  guia,
}

export const routes = [
  {
    path: home,
    name: 'Home',
    Component: Home,
  },
  {
    path: `${guia}/:${guiaParam}`,
    name: 'Guia',
    Component: Guia
  },
]
