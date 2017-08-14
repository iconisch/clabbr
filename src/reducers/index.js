import { combineReducers } from 'redux';
import clabbrs from './clabbrs';
import visibilityFilter from './visibilityFilter';

const reducers = combineReducers({
  clabbrs,
  visibilityFilter
});

export default reducers;
