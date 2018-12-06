import {combineReducers} from 'redux';
import commentsReducer from './comments';
import messagesReducer from './messages';

export default combineReducers({
  comments: commentsReducer,
  messages: messagesReducer
})