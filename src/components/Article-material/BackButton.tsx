import React from 'react';
import { makeStyles, createStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() =>
  createStyles({
    back: {
        backgroundColor:'black',
        color:'#E84E72',
    },
  }),
);

export default function BackButton({GoBack}) {
    const classes = useStyles();
  
    return (
        <Button variant="contained" className={classes.back} onClick={GoBack}>戻る</Button>
    );
  }