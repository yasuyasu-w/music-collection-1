import React,{useState} from 'react';
import { makeStyles,createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import ActionAria from './Content-material/ActionAria'
import Actions from './Content-material/Actions'
import ExtendAria from './Content-material/ExtendAria'

const useStyles = makeStyles(() =>
  createStyles({
    rootCard:{
      marginBottom:'20vh'
    }
  }),
);

const Content=({dispatch,id,ArtistName,SongName,ArtistImage,iPoint,Desc,time})=>{
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    

    return (
        <Card className={classes.rootCard} >

          <ActionAria dispatch={dispatch} id={id}
                      ArtistName={ArtistName}
                      SongName={SongName} 
                      ArtistImage={ArtistImage}
                      iPoint={iPoint} />

          <Actions id={id} time={time}
                   expanded={expanded} setExpanded={setExpanded} />

          < ExtendAria expanded={expanded} setExpanded={setExpanded}
                       Desc={Desc} />

        </Card>
      );
}

export default Content