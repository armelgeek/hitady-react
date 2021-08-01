import React, { useEffect, useState } from 'react'
import { logout, isLogin } from '../middleware/auth';
import { Link } from 'react-router-dom';

const Header = props => {
    const [state, setState] = useState(false)

    useEffect(() => setState(isLogin()), [props])

    const handleLogout = () => {
        logout();
        setState(false)
    }

    return (
        <div className="flex flex-row  justify-between items-stretch pt-3 pl-4 pr-4"> 
        <div className="flex-1">
        <h3>
            <a className="text-primary" href="#">Hitady </a>
        </h3>  
        </div>
        <div className="flex text-right">
            <ul className="flex text-right gap-4">
                <li><i className="fa fa-globe mr-1"></i>English</li>
                <li><i className="fa fa-shopping-cart mr-1"></i>Mes commandes</li>
                <li>Se connecter</li>
                <li> {state && <Link onClick={() => handleLogout()} to="/">Logout</Link>}</li>
            </ul>
       
        </div>
                   
        </div>
    )
}
export default Header;