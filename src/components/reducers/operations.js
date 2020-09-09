 export const actionType={
    LOAD_DATA:"LOAD_DATA"
}

export const ActionCreatior={
    loadData:(data)=>{
        return{
            type:actionType.LOAD_DATA,
            payload:data
        }
    }
}

export const Operations = {
    loadData:()=>(dispatch, _getState, api)=>{
        return api.get(`/menu`).then((response)=>{
            dispatch(ActionCreatior.loadData(response.data))
        })
    }
}