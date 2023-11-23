import {createStore, combineReducers} from 'redux';
import {authReducer} from './authReducer';
import {gadgetsReducer} from './gadgetsReducers';


const reducers = combineReducers({
    auth: authReducer,
    gadgets: gadgetsReducer
})


export const store 
            = createStore(reducers, 
                    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());

                    
