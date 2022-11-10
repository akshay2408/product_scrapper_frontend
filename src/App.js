import './App.css';
import Home from './Component/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router';
import { BrowserRouter} from 'react-router-dom';
import ProductDetail from './Component/ProductDetail';
import Form from './Component/Form';

function App() {
  return (
    <BrowserRouter>
    <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/product/:id' element={<ProductDetail/>}></Route>
          <Route exact path='/form' element={<Form />}></Route>
   </Routes>
</BrowserRouter>
  );
}

export default App;
