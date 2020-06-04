import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(() =>
  createStyles({
    input:{
      display:'none'
    },
    avatar: {
      width: '150px',
      height:'150px'
    },
  }),
);



export default function ArtistImage({image,setArtistImage}) {
  const classes = useStyles();

  return (
      <>
      <input className={classes.input} id='button-file' type="file" accept="image/*"
             onChange={setArtistImage} />
      <label htmlFor='button-file'>
      <Avatar className={classes.avatar} alt="Remy Sharp" src={image} />
      </label>
      </>
  );
}
