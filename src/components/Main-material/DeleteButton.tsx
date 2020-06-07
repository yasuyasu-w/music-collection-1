import React from 'react';
import { makeStyles, createStyles} from '@material-ui/core/styles';
//import Button from '@material-ui/core/Button';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import {DELETE_INFO} from '../../actions/actions'

//const useStyles = makeStyles(() =>
//  createStyles({
//    delete: {
//        //backgroundColor:'black',
//        //color:'#E84E72',
//    },
//  }),
//);

export default function DeleteButton({id,dispatch}) {
  //  const classes = useStyles();

  //✖を押した時の処理
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
  
    return (

        /*<HighlightOffIcon className={classes.delete}    />*/
        <HighlightOffIcon onClick={()=>DeleteContent(id)} />

    );
  }