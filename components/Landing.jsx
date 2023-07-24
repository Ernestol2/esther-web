import Navigation from '../components/Navigation'
import Menu from '../components/Menu'
import Inicio from '../components/Inicio'
import Nosotros from '../components/Nosotros'
import HeroOne from './HeroOne'
import Presentacion from './Presentacion'
import HeroTwo from './HeroTwo'
import HeroThree from './HeroThree'
import Servicios from './Servicios'
import Invitacion from './Invitacion'



export default function Landing() {
  return (
    <>
        <Navigation />
        <Menu />
        <Inicio />
        <Presentacion />
        <Nosotros />
        <HeroOne />
        <HeroTwo />
        <HeroThree />
        <Servicios />
        <Invitacion />
    </>
  )
}
