import React,{useRef} from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(() =>
  createStyles({
    InputAndButton:{
      display:'none'
    },
    avatar: {
      width: '150px',
      height:'150px',
      
    },
  }),
);



export default function ArtistImage({image,setArtistImage}) {
  const classes = useStyles();
  const ref:any=useRef(null)

  //アイコンをclickした時の処理
  const ImageClick = e => {
    if (ref.current) {
      e.preventDefault();
      ref.current.click()
    }
  }

  return (
      <>
      <input className={classes.InputAndButton} id='button-file' type="file" accept="image/*"
             ref={ref} onChange={setArtistImage} />

  {image.length>0 ? <Avatar  className={classes.avatar} alt="Remy Sharp" src={image} />
          :  <Fab onClick={ImageClick} aria-label="add" className={classes.avatar}>
             <AddIcon />
             </Fab>
  }

      </>
  );
}
