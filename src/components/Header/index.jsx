import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header>
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/Banner">Banner</Link>
                <Link to="/Cart">Cart</Link>
            </nav>
        </header>
    );
};