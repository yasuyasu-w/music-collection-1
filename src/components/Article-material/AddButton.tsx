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

export default function AddButton() {
    const classes = useStyles();
  
    return (
        <Button variant="contained" className={classes.add}>追加</Button>
    );
  }