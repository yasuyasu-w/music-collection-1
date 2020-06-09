import React from 'react';
import { makeStyles,createStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import DeleteButton from './DeleteButton'

const useStyles = makeStyles(() =>
  createStyles({
      media:{
        height:'30vh',
        display:'flex',
        justifyContent:'flex-end'
      },
  }),
);

const ActionAria=({dispatch,id,ArtistName,
                   SongName,ArtistImage,iPoint})=>{
    const classes = useStyles();

    return (
        <CardActionArea>
            <CardMedia
              className={classes.media}
              image={ArtistImage}
              title="Contemplative Reptile"
            >
              {
                id!==0 ? <DeleteButton id={id} dispatch={dispatch} />
                       :''
              }
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
    )
}

export default ActionAria