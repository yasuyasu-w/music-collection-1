import React,{ useState, useContext } from 'react';
import { makeStyles, createStyles} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(() =>
  createStyles({
    form:{
      marginTop:'5%',
      marginLeft:'20%',
      marginRight:'20%'
    },
    textField:{
      marginBottom:'10%',
    }
  }),
);

const Article=()=>{
  const classes = useStyles();

  const [inputArtist, setInputArtist] = useState("")
  const [inputSong, setInputSong] = useState("")
  const [inputItioshi, setInputItioshi] = useState("")
  const [inputDesc, setInputDesc] = useState("")

  const handleInputChange = (e,setWords) => {
    setWords(e.target.value)
  }

  return (
    <form className={classes.form} noValidate autoComplete="off">
      <TextField className={classes.textField} id="standard-basic" fullWidth label="アーティスト名" />
      <TextField className={classes.textField} id="standard-basic" fullWidth label="曲名" />
      <TextField className={classes.textField} id="standard-basic" fullWidth label="イチオシポイント" />
      <TextField className={classes.textField} id="outlined-basic" fullWidth label="説明" variant="outlined" />
    </form>
  );
}

export default Article