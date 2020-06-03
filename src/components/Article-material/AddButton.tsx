import React from 'react';
import { makeStyles, createStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() =>
  createStyles({
    add: {
        backgroundColor:'black',
        color:'#E84E72',
    },
  }),
);

export default function AddButton({AddNewContent}) {
    const classes = useStyles();
  
    return (
        <Button variant="contained" className={classes.add} onClick={AddNewContent} >追加</Button>
    );
  }