import React from 'react';
import { makeStyles, createStyles} from '@material-ui/core/styles';
//import Button from '@material-ui/core/Button';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

//const useStyles = makeStyles(() =>
//  createStyles({
//    delete: {
//        //backgroundColor:'black',
//        //color:'#E84E72',
//    },
//  }),
//);

export default function DeleteButton({DeleteContent,id}) {
  //  const classes = useStyles();
  
    return (

        /*<HighlightOffIcon className={classes.delete}    />*/
        <HighlightOffIcon onClick={()=>DeleteContent(id)} />

    );
  }