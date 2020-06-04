import React from "react"
import AddButton from './Main-material/AddButton'
import Content from './Main-material/Content'
import DeleteButton from './Main-material/DeleteButton'
import { makeStyles, createStyles} from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import {DELETE_INFO} from '../actions/actions'


const useStyles = makeStyles(() =>
  createStyles({
    root:{
        marginTop:'5%',
        marginRight:'10vw',
        marginLeft: '10vw'
    },
    array: {
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:'20px'
       
    },
  }),
);

const Main=({state,dispatch})=>{
    const classes = useStyles();
    const history = useHistory();

    const DeleteContent=(DelId)=>{
      const result=window.confirm('本当に削除しますか')

      if(result){
        dispatch({
          type:DELETE_INFO,
          id:DelId
        })
      }else{
        return;
      }
    }

  const NewMakeContent=()=>{
    const newId=state.length
    history.push(`/article/${newId}`)
  }
    

    return(
        <div className={classes.root}>

        {state.map((value,index)=>{return(

        <div key={index} className={classes.array}>
        <Content ArtistName={value.ArtistName} time={value.time} ArtistImage={value.ArtistImage} />
        <DeleteButton DeleteContent={DeleteContent} id={value.id} />
        </div>

        )})}

        <AddButton  NewMakeContent={NewMakeContent} />
        </div>
       
    )
}

export default Main