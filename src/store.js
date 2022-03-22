import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'

const initialState = {
    companies: [],
    //models : []
}

const SET_COMPANIES = 'SET_COMPANIES'
const ADD_COMPANY = 'ADD_COMPANY'
const DESTROY_COMPANY = 'DESTROY_COMPANY'



const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_COMPANIES : 
        //return action.companies
        return state = {...state, companies: action.companies};
        case ADD_COMPANY :
            const companiez = [...state.companies, action.company]
            return state = {...state, companies: companiez };
        case DESTROY_COMPANY :
            const sansCompany = state.companies.filter(company => company.id !== action.company.id)
            return state = {...state, companies : sansCompany}
    

        default : 
        return state
    }


}

const setCompanies = function() {
    return async function(dispatch) {
        const response = await axios.get('/api/companies')
        dispatch({type: 'SET_COMPANIES', companies: response.data})

    }

}


const addCompany = function(){
    return async function(dispatch) {
        const response = await axios.post('/api/companies')
        dispatch({type:'ADD_COMPANY', company: response.data})
        
    }

}

const deleteCompany = function(company) {
    return async function(dispatch){
        await axios.delete(`/api/companies/${company.id}`)
        dispatch({type: 'DESTROY_COMPANY', company})
    }
}


const store = createStore(reducer, applyMiddleware(thunk))

export default store
export {
    setCompanies,
    addCompany,
    deleteCompany
}