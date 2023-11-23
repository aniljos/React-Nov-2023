import {createStore} from 'redux';
import {authReducer} from './authReducer';




export const store 
            = createStore(authReducer, 
                    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());