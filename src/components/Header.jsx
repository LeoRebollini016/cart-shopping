import React from 'react';
import {Link} from 'react-router-dom'
const Header = () => {
    return (
        <nav className='p-4 bg-gray-900 '>
            <Link to="/" className='p-2 text-2xl text-white border-red-100 hover:bg-gray-800'>Inicio</Link>
            <Link to="/Cart" className='p-2 text-2xl text-white border-red-100 hover:bg-gray-800'>Carrito</Link>
            <Link to="/Productos" className='p-2 text-2xl text-white border-red-100 hover:bg-gray-800'>Lista de Productos</Link>
        </nav>
    );
}
export default Header;