import './App.css';
import Banner from './Banner';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import QuestionForm from './QuestionForm';
import Footer from './Footer';
import { useState } from 'react';

const App = () => {

  const [cart, updateCart] = useState(0);
  return (
    <div>
      <Banner />
      <Cart cart={cart} updateCart={updateCart} />
      <ShoppingList cart={cart} updateCart={updateCart} />
      <QuestionForm />
      <Footer />
    </div>
  );
};

export default App;
