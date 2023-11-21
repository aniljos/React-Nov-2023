import React from 'react';
import Hello from './components/Hello';
import Counter from './components/Counter';
import FnCounter from './components/FnCounter';
import ListProducts from './components/ListProducts';
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (

    <Router>
      <div className='container'>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">React</a>
            <ul className="nav">
              <li className="nav-item">
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
                <Link className="nav-link" to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Routes(Views) to be rendered */}
        <main>
            <Routes>
              <Route path='/' element={<Hello message='React'/>} />
              <Route path='/counter' element={<Counter value={10}/>} />
              <Route path='/fncounter' element={<FnCounter/>} />
              <Route path='/products' Component={ListProducts} />
            </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
