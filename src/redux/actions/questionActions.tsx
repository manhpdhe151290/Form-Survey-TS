import axios from 'axios'
import { LINK_API } from '../../utils/constants'
import { LIST_QUESTIONS_REQUEST , LIST_QUESTIONS_SUCCESS, LIST_QUESTIONS_FAIL ,CREATE_QUESTIONS_REQUEST , CREATE_QUESTIONS_SUCCESS ,CREATE_QUESTIONS_FAIL, RESULT_QUESTIONS_REQUEST, RESULT_QUESTIONS_SUCCESS, RESULT_QUESTIONS_FAIL, LISTADMIN_QUESTIONS_REQUEST, LISTADMIN_QUESTIONS_SUCCESS, LISTADMIN_QUESTIONS_FAIL, DELETE_QUESTIONS_REQUEST, DELETE_QUESTIONS_SUCCESS, DELETE_QUESTIONS_FAIL, UPDATE_QUESTIONS_REQUEST, UPDATE_QUESTIONS_SUCCESS, UPDATE_QUESTIONS_FAIL} from  '../constants/questionConstants'
export const listQuestions = (pageNumber:number) => async (dispatch:any,getState:any) =>{
    try {
        dispatch({ type: LIST_QUESTIONS_REQUEST })
        const {
            userLogin: { userInfo },
          } = getState()
      
          const config = {
            headers: {
              Authorization: `Bearer ${userInfo.tokens.access.token}`,
            },
          }
    
        const { data } = await axios.get(
          `${LINK_API}/v1/questions/?page=${pageNumber}`, config
        )
    
        dispatch({
          type: LIST_QUESTIONS_SUCCESS,
          payload: data,
        })
      } catch (error:any) {
        dispatch({
          type : LIST_QUESTIONS_FAIL ,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        })
      }
    }
    export const createQuestion = (question : {}) => async (dispatch:any, getState:any) => {
      try {
        dispatch({
          type: CREATE_QUESTIONS_REQUEST,
        })
    
        const {
          userLogin: { userInfo },
        } = getState()
    
        const config = {
          headers: {
            Authorization: `Bearer ${userInfo.tokens.access.token}`,
          },
        }
    
        const { data } = await axios.post(`${LINK_API}/v1/questions/edit`, question, config)
    
        dispatch({
          type: CREATE_QUESTIONS_SUCCESS,
          payload: data,
        })
      } catch (error :any) {
        const message =
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
      
        dispatch({
          type: CREATE_QUESTIONS_FAIL,
          payload: message,
        })
      }
    }
    export const resultQuestion = (result : any) => async (dispatch:any, getState:any) => {
      try {
        dispatch({
          type: RESULT_QUESTIONS_REQUEST,
        })
    
        const {
          userLogin: { userInfo },
        } = getState()
    
        const config = {
          headers: {
            Authorization: `Bearer ${userInfo.tokens.access.token}`,
          },
        }
        
    
        const { data } = await axios.post(`${LINK_API}/v1/questions/submit`, result, config)
    
        dispatch({
          type: RESULT_QUESTIONS_SUCCESS,
          payload: data,
        })
      } catch (error:any) {
        const message =
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
      
        dispatch({
          type: RESULT_QUESTIONS_FAIL,
          payload: message,
        })
      }
    }
    export const listAdQuestions = (pageNumber :number) => async (dispatch:any,getState :any) =>{
      try {
          dispatch({ type: LISTADMIN_QUESTIONS_REQUEST })
          const {
              userLogin: { userInfo },
            } = getState()
        
            const config = {
              headers: {
                Authorization: `Bearer ${userInfo.tokens.access.token}`,
              },
            }
      
          const { data } = await axios.get(
            `${LINK_API}/v1/questions/edit/?page=${pageNumber}`, config
          )
      
          dispatch({
            type: LISTADMIN_QUESTIONS_SUCCESS,
            payload: data,
          })
        } catch (error :any) {
          dispatch({
            type : LISTADMIN_QUESTIONS_FAIL ,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          })
        }
      }
      export const deleteQuestion = (id :string) => async (dispatch :any, getState :any) => {
        try {
          dispatch({
            type: DELETE_QUESTIONS_REQUEST,
          })
      
          const {
            userLogin: { userInfo },
          } = getState()
      
          const config = {
            headers: {
              Authorization: `Bearer ${userInfo.tokens.access.token}`,
            },
          }
      
          await axios.delete(`${LINK_API}/v1/questions/edit/${id}`, config)
      
          dispatch({
            type: DELETE_QUESTIONS_SUCCESS,
          })
        } catch (error :any) {
          const message =
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message
         
          dispatch({
            type: DELETE_QUESTIONS_FAIL,
            payload: message,
          })
        }
      }
      export const updateQuestion = (id :string,question : {}) => async (dispatch:any, getState :any) => {
        try {
          dispatch({
            type: UPDATE_QUESTIONS_REQUEST,
          })
      
          const {
            userLogin: { userInfo },
          } = getState()
      
          const config = {
            headers: {
              'Content-Type' : 'application/json',
              Authorization: `Bearer ${userInfo.tokens.access.token}`,
            },
          }
      
          const { data } = await axios.patch(`${LINK_API}/v1/questions/edit/${id}`, question, config)
      
          dispatch({
            type: UPDATE_QUESTIONS_SUCCESS,
            payload: data,
          })
        } catch (error :any) {
          const message =
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message
        
          dispatch({
            type: UPDATE_QUESTIONS_FAIL,
            payload: message,
          })
        }
      }