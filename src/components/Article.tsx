import React,{ useState, useContext } from 'react';
import { makeStyles, createStyles} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import AddButton from './Article-material/AddButton'
import BackButton from './Article-material/BackButton'



const useStyles = makeStyles(() =>
  createStyles({
    form:{
      marginTop:'5%',
      marginLeft:'20%',
      marginRight:'20%'
    },
    textField:{
      marginBottom:'10%',
    },
    ButtonPlace:{
      display:'flex',
      justifyContent:'space-between'
    }
  }),
);

const Article=()=>{
  const classes = useStyles();

  const [inputArtist, setInputArtist] = useState("")
  const [inputSong, setInputSong] = useState("")
  const [inputItioshi, setInputItioshi] = useState("")
  const [inputDesc, setInputDesc] = useState("")


  return (
    <form className={classes.form} noValidate autoComplete="off">
      <TextField className={classes.textField} id="standard-basic" fullWidth label="アーティスト名" 
      value={inputArtist} onChange={e=>setInputArtist(e.target.value)}/>

      <TextField className={classes.textField} id="standard-basic" fullWidth label="曲名" 
      value={inputSong} onChange={e=>setInputSong(e.target.value)} />

      <TextField className={classes.textField} id="standard-basic" fullWidth label="イチオシポイント"
      value={inputItioshi} onChange={e=>setInputItioshi(e.target.value)} />

      <TextField className={classes.textField} id="outlined-basic" fullWidth label="説明"  variant="outlined" 
      value={inputDesc} onChange={e=>setInputDesc(e.target.value)} />

      <div className={classes.ButtonPlace}>
        <BackButton />
        <AddButton />
      </div>
    </form>


   
  );
}

export default Article