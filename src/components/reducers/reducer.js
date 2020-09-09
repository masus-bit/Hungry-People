import {initialState} from './storage.js'
import {ActionCreator, actionType} from './operations.js'
export const reducer = (state = initialState, action) => {
switch(action.type){
    case actionType.LOAD_DATA:
        return Object.assign({}, state,{
            menu:action.payload,
        })
}

}