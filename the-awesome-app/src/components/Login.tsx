import { useLogin } from '../hooks/useLogin';
import Alert from './Alert';

function Login(){

   const [userName, setUserName, password, setPassword, message, severity, 
                                                login, closeAlert, calculateValue] =  useLogin();
    
    return (
        <div>
            <h4>Login</h4>

            <p>Calaculated Value : {calculateValue}</p>

            {message ? <Alert message={message} severity={severity} onClose={closeAlert}/> : null}

            <div className="form-group">
                <label>UserName</label>
                <input className="form-control" placeholder="UserName" 
                                            value={userName} onChange={e => setUserName(e.target.value)}/>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="********"
                                            value={password} onChange={e => setPassword(e.target.value)}/>
            </div>
            <br/>

            <div>
                <button className="btn btn-success" onClick={login}>Login</button>
            </div>

        </div>
    )

}

export default Login;