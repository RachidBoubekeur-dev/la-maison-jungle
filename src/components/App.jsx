import './App.css';
import Banner from './Banner';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import QuestionForm from './QuestionForm';
import Footer from './Footer';
import { useState } from 'react';
import { Header } from './Header';
import { Routes, Route } from 'react-router-dom';

const App = () => {

  const [cart, updateCart] = useState(0);
  return (
    <div>
      <Routes>

        {/* <Header /> */}

        {/* <Route exact path='/Banner'>
          <Banner />
        </Route>

        <Route exact path='/Cart'>
          <Cart cart={cart} updateCart={updateCart} />
        </Route> */}

        <Route exact path="/fff" element={<Banner />} />
        <Banner />
        <Cart cart={cart} updateCart={updateCart} />
        <ShoppingList cart={cart} updateCart={updateCart} />
        <QuestionForm />
        <Footer />

      </Routes>
    </div >
  );
};

export default App;
