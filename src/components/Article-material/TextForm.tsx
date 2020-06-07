import React from 'react'
import { makeStyles, createStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import ArtistImage from './ArtistImage'


const useStyles = makeStyles(() =>
  createStyles({
    imagePlace:{
      display:'flex',
      justifyContent:'space-between',
      alignItems:'center',
    },
    ArtistSongPlace:{
      marginRight:'5%'
    },
    textField:{
      marginBottom:'10%',
    }
  }),
);

const TextForm=({inputArtist,
                 setInputArtist,
                 inputSong,
                 setInputSong,
                 image,
                 setImage,
                 inputItioshi,
                 setInputItioshi,
                 inputDesc,
                 setInputDesc})=>{
    const classes = useStyles();
    return(
      <>
      <div className={classes.imagePlace} >
      <div className={classes.ArtistSongPlace}>
      <TextField className={classes.textField} id="standard-basic" fullWidth label="アーティスト名" 
      value={inputArtist} onChange={e=>setInputArtist(e.target.value)}/>

      <TextField className={classes.textField} id="standard-basic" fullWidth label="曲名" 
      value={inputSong}    onChange={e=>setInputSong(e.target.value)} />
      </div>

      <ArtistImage image={image} setImage={setImage}   />
      </div>
      

      <TextField className={classes.textField} id="standard-basic" fullWidth label="イチオシポイント"
      value={inputItioshi} onChange={e=>setInputItioshi(e.target.value)} />

      <TextField className={classes.textField} id="outlined-basic" fullWidth label="説明"  variant="outlined" 
      value={inputDesc}    onChange={e=>setInputDesc(e.target.value)} />
      </>
    )
}

export default TextForm