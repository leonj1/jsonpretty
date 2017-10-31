import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { TYPED_JSON, FORMATTED_JSON_SUCCESS, FORMATTED_JSON_FAILED } from './redux/actions';
import createSagaMiddleware from 'redux-saga';
import mySaga from './sagas/createPrettyJson';

const initialState = {
	contents: "",
	pretty: ""
}

// reducers
function startJsonFormatting(action) {
	return action.payload;
}

function failedJsonFormatting(action) {
	return action.payload;
}

// Actions the store should perform when an action is received
const myReducer = (state = initialState, action) => {
	switch (action.type) {
		case TYPED_JSON:
			return {
				...state,
				contents: startJsonFormatting(action),
			};
		case FORMATTED_JSON_FAILED:
			return {
				...state,
				contents: failedJsonFormatting(action),
			};
		case FORMATTED_JSON_SUCCESS:
			return {
				...state,
				pretty: action.pretty,
			}
		default:
			return state;
	}
}

const sagaMiddleware = createSagaMiddleware();
const middleware = [
    sagaMiddleware
];

const composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const enhancer = composeEnhancers(
  applyMiddleware(...middleware)
);

const store = createStore(
  myReducer,
  enhancer
);

sagaMiddleware.run(mySaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();

