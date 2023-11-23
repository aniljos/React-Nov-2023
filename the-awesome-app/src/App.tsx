import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navigation from './components/Navigation';
import {AppRoute, routes} from './routes/routes';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (

    <Router>
      <div className='container-fluid'>
       
        <Navigation/>

        {/* Routes(Views) to be rendered */}
        <main>
            <Routes>
              {/* <Route path='/' element={<Hello message='React'/>} />
              <Route path='/counter' element={<Counter value={10}/>} />
              <Route path='/fncounter' element={<FnCounter/>} />
              <Route path='/products' Component={ListProducts} />
              <Route path='/products/:id' Component={EditProduct}/>
              <Route path='/gadgets' Component={GadgetStore}/>
              <Route path="/login" Component={Login}/> */}

              {routes.map((item: AppRoute) => {

                if(item.isProtected){
                  return (
                   
                  <Route key={item.path}  path={item.path} 
                          element={<ProtectedRoute> <item.component {...item.props} /> </ProtectedRoute>} />
                    
                    
                  )
                }
                else{
                  return (
                    <Route key={item.path} path={item.path} element={<item.component {...item.props} />} />
                  )
                }

                
              })}
            </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
