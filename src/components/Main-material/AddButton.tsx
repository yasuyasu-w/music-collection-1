import React from 'react';
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add';
import { createStyles, makeStyles } from "@material-ui/core/styles"
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(() =>
  createStyles({
    addIcon:{
      position: 'absolute',
      right: '10vw',
      backgroundColor:'black',
      color:'#E84E72',
      fontSize: '40px',
      marginTop:'50px'
      
    }
  })
);

export default function AddButton({state}){
  const classes = useStyles();
  const newId=state.length
    const history = useHistory();
    return (
        <Fab onClick={()=>history.push(`/article/${newId}`)} aria-label="add" className={classes.addIcon}>
          <AddIcon />
        </Fab>
    )
}