import React, {useContext} from "react";
import { Link } from 'react-router-dom';
import { routes } from "../routes/routes";
import { AppThemeContext, ThemeState } from "../context/AppThemeContext";

const Navigation = React.memo(() => {

    const context =  useContext<ThemeState>(AppThemeContext);

    const mode = context.mode;

    return (

        // <nav className="navbar navbar-dark bg-dark">
        <nav className={`navbar navbar-${mode} bg-${mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">React</a>
                <ul className="nav">
                    {/* <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/counter">Counter</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/fncounter">FnCounter</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/products">Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/gadgets">Gadgets Store</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li> */}

                    {routes.filter(item => item.isMainMenu).map(item => {
                        return (
                            <li key={item.path} className="nav-item">
                                <Link className="nav-link" to={item.path}>{item.title}</Link>
                            </li>
                        );
                    })}

                </ul>
            </div>
        </nav>

    );

});

export default Navigation;