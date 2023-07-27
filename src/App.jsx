import { Switch, Route } from 'react-router-dom';
import RutasProtegidas from '../components/RutasProtegidas';
import Landing from '../components/Landing';
import ProductForm from '../components/ProductForm';
import Validador from '../components/Validador';
import TodosLosProductos from '../components/TodosLosProductos';
import './App.css';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/admin" component={Validador} />
        <RutasProtegidas path="/productonuevo" comp={ProductForm} />
        <RutasProtegidas path="/products" comp={TodosLosProductos} />
      </Switch>
    </>
  );
}

export default App;
