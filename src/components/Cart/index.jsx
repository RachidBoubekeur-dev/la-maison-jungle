import './index.css';
import { useState, useEffect } from 'react';

const Cart = ({ cart, updateCart }) => {
    const monsteraPrice = 8;
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        document.title = `LMJ: ${monsteraPrice * cart} € d'achats`;
    }, [cart]);
    return isOpen ? (
        <div className='lmj-cart'>
            <button
                className='lmj-cart-toggle-button'
                onClick={() => setIsOpen(false)}
            >
                Fermer
            </button>
            <h2>Panier</h2>
            <div>Monstera : {monsteraPrice}€</div>
            <button onClick={() => updateCart(cart + 1)}>Ajouter</button>
            <h3>Total : {monsteraPrice * cart}€</h3>
            <button onClick={() => updateCart(0)}>Vider le panier</button>
        </div>
    ) : (
        <div className='lmj-cart-closed'>
            <button
                className='lmj-cart-toggle-button'
                onClick={() => setIsOpen(true)}
            >
                Ouvrir le Panier
            </button>
        </div>
    );
};

export default Cart;