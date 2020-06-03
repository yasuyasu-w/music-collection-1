import React from 'react';
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add';
import { createStyles, makeStyles } from "@material-ui/core/styles"
const useStyles = makeStyles(() =>
  createStyles({
    addIcon:{
      position: 'absolute',
      right: '10%',
      backgroundColor:'black',
      color:'#E84E72',
      fontSize: '40px',
      marginTop:'10px'
      
    }
  })
);

export default function AddButton(){
  const classes = useStyles();
    return (
        <Fab  aria-label="add" className={classes.addIcon}>
          <AddIcon />
        </Fab>
    )
}