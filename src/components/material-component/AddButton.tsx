import React from 'react';
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add';
import { createStyles, makeStyles } from "@material-ui/core/styles"
const useStyles = makeStyles(() =>
  createStyles({
    addIcon:{
      position: 'absolute',
      bottom: '10%',
      right: '10%',
      backgroundColor:'black',
      color:'#E84E72',
      fontSize: '40px'
      
    }
  })
);

export default function AddButton(){
  const classes = useStyles();
    return (
        <Fab color="primary" aria-label="add" className={classes.addIcon}>
          <AddIcon />
        </Fab>
    )
}