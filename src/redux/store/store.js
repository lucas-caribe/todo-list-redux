import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../reducers';

const store = createStore(rootReducer, composeWithDevTools());

export default store;

// store - CORAÇÃO DO REDUX

// actions - OBJETOS SIMPLES

// reducers - CALCULAM AS ALTERAÇÕES QUE DEVEM SER FEITAS NO 
// ESTADO GLOBAL A PARTIR DE ACTIONS ENVIADAS PELA STORE
