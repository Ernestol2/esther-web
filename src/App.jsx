import { Switch, Route } from 'react-router-dom';
import RutasProtegidas from '../components/RutasProtegidas';
import Landing from '../components/Landing';
import ProductForm from '../components/ProductForm';
import Validador from '../components/Validador';
import TodosLosProductos from '../components/TodosLosProductos';
import './App.css';
import NotFound from '../components/NotFound';
import Tortas from '../components/Tortas';
import IndividualTorta from '../components/IndividualTorta';
import Dulces from '../components/Dulces';
import IndividualDulce from '../components/IndividualDulce';
import Salados from '../components/Salados';
import IndividualSalados from '../components/IndividualSalados';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/admin" component={Validador} />
        <Route exact path="/tortas" component={Tortas}/>
        <Route exact path="/tortas/:id" component={IndividualTorta} />
        <Route exact path="/dulces" component={Dulces} />
        <Route exact path="/dulces/:id" component={IndividualDulce} />
        <Route exact path="/salados" component={Salados} />
        <Route exact path="/salados/:id" component={IndividualSalados} />
        <RutasProtegidas path="/productonuevo" comp={ProductForm} />
        <RutasProtegidas path="/products" comp={TodosLosProductos} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
