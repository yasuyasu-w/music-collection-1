import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(() =>
  createStyles({
  }),
);

export default function TextFields() {
  const classes = useStyles();

  return (
    <form  noValidate autoComplete="off">
      <TextField id="standard-basic" label="アーティスト名" />
      <TextField id="standard-basic" label="曲名" />
      <TextField id="standard-basic" label="イチオシポイント" />
      <TextField id="outlined-basic" label="説明" variant="outlined" />
    </form>
  );
}
