import {counter} from './reducers.jsx'
import { createStore } from 'redux';

const store = createStore(counter);
export default store;