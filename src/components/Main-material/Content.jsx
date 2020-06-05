import React from 'react';
import { makeStyles,createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteButton from './DeleteButton'
import {DELETE_INFO} from '../../actions/actions'
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(() =>
  createStyles({
    rootCard:{
      marginBottom:'20vh'
    },
      media:{
        height:'100px',
        display:'flex',
        justifyContent:'flex-end'
      },
  }),
);

const Content=({dispatch,id,ArtistName,SongName,ArtistImage,iPoint,time})=>{
    const classes = useStyles();
    const history = useHistory();

    //✖を押した時の処理
    const DeleteContent=(DelId)=>{
      const result=window.confirm('本当に削除しますか')

      if(result){
        dispatch({
          type:DELETE_INFO,
          id:DelId
        })
      }else{
        return;
      }
    }
    //編集を押したときの処理
    const EditContent=(selectID)=>{
      history.push(`/article/${selectID}`)
    }

    return (
        <Card className={classes.rootCard} >
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={ArtistImage}
              title="Contemplative Reptile"
            >
              <DeleteButton DeleteContent={DeleteContent} id={id} />
            </CardMedia>

            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {iPoint}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
               アーテイスト名:{ArtistName} <br/>
               曲名:{SongName}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <div>
                {time}
            </div>
            <Button size="small" color="primary" onClick={()=>EditContent(id)} >
              編集
            </Button>
          </CardActions>
        </Card>
      );
}

export default Content