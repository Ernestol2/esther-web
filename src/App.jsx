import { Switch, Route } from 'react-router-dom';
import RutasProtegidas from '../components/RutasProtegidas';
import Landing from '../components/Landing';
import ProductForm from '../components/ProductForm';
import Validador from '../components/Validador';
import TodosLosProductos from '../components/TodosLosProductos';
import './App.css';
import NotFound from '../components/NotFound';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/admin" component={Validador} />
        <RutasProtegidas path="/productonuevo" comp={ProductForm} />
        <RutasProtegidas path="/products" comp={TodosLosProductos} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
