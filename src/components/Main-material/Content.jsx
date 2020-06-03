import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(() =>
  createStyles({
  }),
);

const Content=()=>{
    return(
        <Grid container  spacing={2}>
            <Grid item xs={12}>
                <Paper > jioddffd</Paper>
            </Grid>
            <Grid item xs={12}>
            <Paper > jioddffd</Paper>
            </Grid>
        </Grid>
    )
}

export default Content