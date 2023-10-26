import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Menu';
import Category from './Category';
import { Routes, Route } from "react-router-dom"
import Productview from './Productview';
import Cart_page from './Cart_page';


function App() {
  return (
    <>
      <Menu />

      <Routes>
        <Route path='/' element={<Category />} />
        <Route path='product/:id' element={<Productview />} />
        <Route path='cart' element={<Cart_page />} />
      </Routes>


    </>
  );
}

export default App;
