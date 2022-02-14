import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { userLoginReducer,userRegisterReducer  } from './reducers/userReducers';
import {UserInfo} from '../Interface/interface'
import { questionListReducer ,questionCreateReducer , questionResultReducer ,questionListAdReducer ,QuestionDeleteReducer,QuestionUpdateReducer} from '../redux/reducers/questionReducers';
const reducer= combineReducers({
    userLogin : userLoginReducer,
  userRegister : userRegisterReducer,
  questionList : questionListReducer,
  questionCreate : questionCreateReducer,
  questionresult : questionResultReducer,
  questionAd : questionListAdReducer,
  questionDelete : QuestionDeleteReducer,
  questionUpdate : QuestionUpdateReducer
})
export type RootState = ReturnType<typeof reducer>


const userInfoFromStorage :  UserInfo  =  localStorage.getItem('userInfo')
const initialState : any = {
    user : {
      userInfo : userInfoFromStorage
    }
  };
  const middleware = [thunk]
  
  const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  )
  
  export default store