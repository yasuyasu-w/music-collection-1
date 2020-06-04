import {NEW_CONTENT,
        ADD_CONTENT,
        DELETE_INFO} from '../actions/actions'
import {initialState} from '../initiasState'

const reducers=(state=initialState,action)=>{
    switch (action.type){
   //     case NEW_CONTENT:
   //         const newID={id:action.id}
   //         return [newID,...state]
         
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
           return deleteState
    }
}

export default reducers