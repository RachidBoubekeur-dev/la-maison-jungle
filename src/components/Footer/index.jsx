import { useState } from 'react';
import './index.css';

function Footer() {
    const [inputValue, setInputValue] = useState('');
    const controlMail = () => { !inputValue.includes('@') && alert('Attention, il n\'y a pas d\'@, ceci n\'est pas une adresse valide.'); };

    return (
        <footer className='lmj-footer'>
            <div className='lmj-footer-elem'>
                Pour les passionné·e·s de plantes 🌿🌱🌵
            </div>
            <div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
            <input type='email' value={inputValue} onChange={(e) => setInputValue(e.target.value)} onBlur={() => controlMail()} />
        </footer>
    );
}

export default Footer;