import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(() =>
  createStyles({
    form:{
      marginTop:'5%',
      marginLeft:'20%',
      marginRight:'20%'
    },
    textField:{
      marginBottom:'10%',
    }
  }),
);

export default function TextFields() {
  const classes = useStyles();

  return (
    <form className={classes.form} noValidate autoComplete="off">
      <TextField className={classes.textField} id="standard-basic" fullWidth label="アーティスト名" />
      <TextField className={classes.textField} id="standard-basic" fullWidth label="曲名" />
      <TextField className={classes.textField} id="standard-basic" fullWidth label="イチオシポイント" />
      <TextField className={classes.textField} id="outlined-basic" fullWidth label="説明" variant="outlined" />
    </form>
  );
}
