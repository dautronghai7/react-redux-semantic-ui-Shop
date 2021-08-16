import {ActionTypes as types} from '../contants/action-type'


const initialState = {
    products: []
}
export const productReducer = (state=initialState, {type, payload})=>{
    switch(type){
        case types.SET_PRODUCTS:            
            return {...state, products: payload};
        default :
            console.log('default')
            return state;
    }    
}
export const selectedProductReducer = (state={}, {type, payload})=>{
    switch(type){        
        case types.SELECTED_PRODUCT:
            return {...state, ...payload};
        case types.REMOVE_SELECTED_PRODUCT:
                return {};
        default :
            console.log('default')
            return state;
    }    
}