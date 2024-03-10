// Navbar.jsx
import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { NavLink } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
    const [menu, setMenu] = useState("Shop");
    const {getTotalCartItems} = useContext(ShopContext);

    return (
        <div className='navbar'>
            <div className='nav-logo'> 
                <img src={logo} alt="" />
                <p>SHOPLOCAL</p>
            </div>
            <ul className='nav-menu'>
                <li onClick={() => setMenu("Shop")}><NavLink style={{textDecoration:'none'}} to='/' activeClassName='active'>SHOP</NavLink>{menu === "Shop" ? <hr/> : <></>}</li>
                <li onClick={() => setMenu("Mens")}><NavLink style={{textDecoration:'none'}} to='/Mens' activeClassName='active'>MENS</NavLink>{menu === "Mens" ? <hr/> : <></>}</li>
                <li onClick={() => setMenu("Womens")}><NavLink style={{textDecoration:'none'}} to='/Womens' activeClassName='active'>WOMENS</NavLink>{menu === "Womens" ? <hr/> : <></>}</li>
                <li onClick={() => setMenu("Kids")}><NavLink style={{textDecoration:'none'}} to='/Kids' activeClassName='active'>KIDS</NavLink>{menu === "Kids" ? <hr/> : <></>}</li>
            </ul>
            <div className='nav-login-cart'>
                <NavLink style={{textDecoration:'none'}} to='/Login'><button>LOGIN</button></NavLink>
                <NavLink style={{textDecoration:'none'}} to='/Cart'><img src={cart_icon} alt="" /></NavLink>
                <div className='nav-cart-count'>{getTotalCartItems()}</div>
            </div>
        </div>
    )
}

export default Navbar;
