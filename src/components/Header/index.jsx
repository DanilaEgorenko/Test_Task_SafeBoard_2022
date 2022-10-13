import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
    return (
        <header>
            <nav>
                <NavLink
                    to=''
                    className={({ isActive }) => isActive ? 'active-link' : ''}
                    end
                >
                    Главная
                </NavLink>
                <NavLink
                    to='list'
                    className={({ isActive }) => isActive ? 'active-link' : ''}
                >
                    Список
                </NavLink>
            </nav>
        </header>
    );
}