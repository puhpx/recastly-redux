import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';

var initialState = {
  currentVideo: exampleVideoData[0],
  videoList: exampleVideoData
};

var store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
