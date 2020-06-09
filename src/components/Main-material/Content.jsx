import React from 'react';
import { makeStyles,createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from "react-router-dom";
import ActionAria from './Content-material/ActionAria'

const useStyles = makeStyles(() =>
  createStyles({
    rootCard:{
      marginBottom:'20vh'
    }
  }),
);

const Content=({dispatch,id,ArtistName,SongName,ArtistImage,iPoint,time})=>{
    const classes = useStyles();
    const history = useHistory();

    
    //編集を押したときの処理
    const EditContent=(selectID)=>{
     if(selectID!==0) {
       history.push(`/article/${selectID}`)
      }else{
        return;
      }
    }

    return (
        <Card className={classes.rootCard} >

          <ActionAria dispatch={dispatch} id={id}
                      ArtistName={ArtistName}
                      SongName={SongName} 
                      ArtistImage={ArtistImage}
                      iPoint={iPoint} />

          <CardActions>
            <div>
                {time}
            </div>
            <Button size="small" color="primary" onClick={()=>EditContent(id)} >
              {id===0 ? '編集できません':'編集する'}
            </Button>
          </CardActions>
        </Card>
      );
}

export default Content