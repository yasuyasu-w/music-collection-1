import React from 'react';
import { makeStyles,createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import ActionAria from './Content-material/ActionAria'
import Actions from './Content-material/Actions'
const useStyles = makeStyles(() =>
  createStyles({
    rootCard:{
      marginBottom:'20vh'
    }
  }),
);

const Content=({dispatch,id,ArtistName,SongName,ArtistImage,iPoint,time})=>{
    const classes = useStyles();
    

    return (
        <Card className={classes.rootCard} >

          <ActionAria dispatch={dispatch} id={id}
                      ArtistName={ArtistName}
                      SongName={SongName} 
                      ArtistImage={ArtistImage}
                      iPoint={iPoint} />

          <Actions id={id} time={time} />            

        </Card>
      );
}

export default Content