import {ADD_CONTENT,
        DELETE_INFO,
        SORT_BY_TIME} from '../actions/actions'
import {initialState} from '../initiasState'

const reducers=(state=initialState,action)=>{
    switch (action.type){       
        case ADD_CONTENT:
            const content={
            id:action.id,
            ArtistName:action.ArtistName,
            SongName:action.SongName,
            ArtistImage:action.ArtistImage,
            iPoint:action.iPoint,
            Desc:action.Desc,
            time:action.time}
            return [content,...state]
        
        case DELETE_INFO:
           const deleteState=state.filter(value=>value.id!==action.id)
           const ReIdState= deleteState.map((value,index)=>{
            value.id=(deleteState.length-1)-index
             return value
         })
           return ReIdState
        
        case SORT_BY_TIME:
            const sortTimeState=[...state].sort((a,b)=>a.time<b.time ? 1:-1)
            const newIdState= sortTimeState.map((value,index)=>{
               value.id=(sortTimeState.length-1)-index
                return value
            })
            return newIdState

    }
}

export default reducers