import React from 'react';
import { makeStyles,createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() =>
  createStyles({
      root:{
        flexGrow: '0.8'
      }
  }),
);

const Content=({id,ArtistName,SongName,ArtistImage,iPoint,time})=>{
    const classes = useStyles();

    return (
        <Card className={classes.root} >
          <CardActionArea>
            <CardMedia
              image={ArtistImage}
              title="Contemplative Reptile"
            />
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
            <Button size="small" color="primary">
              編集
            </Button>
          </CardActions>
        </Card>
      );
}

export default Content