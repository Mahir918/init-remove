import {createStore,applyMiddleware,compose} from 'redux'
import Thunk from 'redux-thunk'
import rootReducer from  './redux/index' 

const middleware  = [Thunk]
const initialState = {}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
        applyMiddleware(...middleware)
    )
)

export default store