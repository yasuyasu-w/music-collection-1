import React from 'react';
import { makeStyles, createStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() =>
  createStyles({
    delete: {
        backgroundColor:'black',
        color:'#E84E72',
    },
  }),
);

export default function DeleteButton() {
    const classes = useStyles();
  
    return (
        <Button variant="contained" className={classes.delete}>削除</Button>
    );
  }