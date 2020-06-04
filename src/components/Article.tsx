import React,{ useState, useContext } from 'react';
import { makeStyles, createStyles} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import AddButton from './Article-material/AddButton'
import BackButton from './Article-material/BackButton'
import { useHistory } from "react-router-dom";
import {ADD_CONTENT} from '../actions/actions'
import {nowTime} from '../nowTime'
import ArtistImage from './Article-material/ArtistImage'




const useStyles = makeStyles(() =>
  createStyles({
    form:{
      marginTop:'5%',
      marginLeft:'20%',
      marginRight:'20%'
    },
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
    },
    ButtonPlace:{
      display:'flex',
      justifyContent:'space-between'
    }
  }),
);

const Article=({state,dispatch})=>{
  const classes = useStyles();
  const history = useHistory();

  const [inputArtist, setInputArtist] = useState("")
  const [inputSong, setInputSong] = useState("")
  const [inputItioshi, setInputItioshi] = useState("")
  const [inputDesc, setInputDesc] = useState("")

  //ファイル読み込み時の型エラーが起きたため
  type StateType=string | ArrayBuffer | null
  const [image,setImage]=useState<StateType>('')

  //新たにコンテントを追加
  const AddNewContent=()=>{
    setInputArtist('')
    setInputSong('')
    setInputItioshi('')
    setInputDesc('')

    const newId=state.length

    dispatch({
      type:ADD_CONTENT,
      id:newId,
      ArtistName:inputArtist,
      SongName:inputSong,
      iPoint:inputItioshi,
      Desc:inputDesc,
      time:nowTime()
    })

    history.push('/')

  }

  //戻るボタンを押したときMain.tsxへ戻る
  const GoBack=()=>{
    setInputArtist('')
    setInputSong('')
    setInputItioshi('')
    setInputDesc('')
    history.goBack()

  }

  const setArtistImage=e=>{

    //一枚だけ表示する
    const file=e.target.files[0]
    //ファイルリーダー作成
    const reader=new FileReader()

    reader.onload=()=>{
      //dataURLを表示
      const dataURL=reader.result
      setImage(dataURL)
      
    }
    //ファイルをdata URLとして読み込む
    reader.readAsArrayBuffer(file)
    setImage(e.target.files[0])
    console.log(image)
  }

  return (
    <form className={classes.form} noValidate autoComplete="off">

      <div className={classes.imagePlace} >

      <div className={classes.ArtistSongPlace}>
      <TextField className={classes.textField} id="standard-basic" fullWidth label="アーティスト名" 
      value={inputArtist} onChange={e=>setInputArtist(e.target.value)}/>

      <TextField className={classes.textField} id="standard-basic" fullWidth label="曲名" 
      value={inputSong}    onChange={e=>setInputSong(e.target.value)} />
      </div>

      <ArtistImage image={image} setArtistImage={setArtistImage} />

      </div>

      <TextField className={classes.textField} id="standard-basic" fullWidth label="イチオシポイント"
      value={inputItioshi} onChange={e=>setInputItioshi(e.target.value)} />

      <TextField className={classes.textField} id="outlined-basic" fullWidth label="説明"  variant="outlined" 
      value={inputDesc}    onChange={e=>setInputDesc(e.target.value)} />

      <div className={classes.ButtonPlace}>
        <BackButton GoBack={GoBack} />
        <AddButton AddNewContent={AddNewContent} />
      </div>

    </form>


   
  );
}

export default Article