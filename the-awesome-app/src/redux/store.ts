import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {authReducer} from './authReducer';
import {gadgetsReducer} from './gadgetsReducers';
import thunk from 'redux-thunk';

const reducers = combineReducers({
    auth: authReducer,
    gadgets: gadgetsReducer
})

const loggingMiddleware = (store: any) => {
    return (next: any) => {
        return (action: any)=> {
            console.log("[loggingMiddleware action b/4]", action);
            console.log("[loggingMiddleware state b/4]", store.getState());
            const result = next(action);
            console.log("[loggingMiddleware action]", action);
            console.log("[loggingMiddleware state]", store.getState());

        }
    }
}

// export const store 
//             = createStore(reducers, 
//                     (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());

//export const store = createStore(reducers, applyMiddleware(loggingMiddleware));

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers,  composeEnhancers(applyMiddleware(loggingMiddleware, thunk)));
                    
export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;