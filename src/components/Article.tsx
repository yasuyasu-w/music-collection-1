import React,{ useState,useEffect } from 'react';
import {useParams} from 'react-router-dom'
import { makeStyles, createStyles} from '@material-ui/core/styles';
import TextForm from './Article-material/TextForm'
import AddButton from './Article-material/AddButton'
import BackButton from './Article-material/BackButton'
import { useHistory } from "react-router-dom";
import {ADD_CONTENT,DELETE_INFO} from '../actions/actions'
import {nowTime} from '../nowTime'




const useStyles = makeStyles(() =>
  createStyles({
    form:{
      marginTop:'5%',
      marginLeft:'20%',
      marginRight:'20%'
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

   const { id } = useParams()
   //編集ボタンの押されたcontentのidをURLのpathを伝って受け取り、
   //stateとマッチするものを残す(useParamでidは文字列で受け取るため、
   //parseIntで数値に変換)
   
    const [inputArtist, setInputArtist] =  useState('')
    const [inputSong, setInputSong] =  useState('')
    const [inputItioshi, setInputItioshi] =  useState('')
    const [inputDesc, setInputDesc] =  useState('')

    //ファイル読み込み時の型エラーが起きたため、型定義
    type StateType=string | ArrayBuffer | null
    const [image,setImage]= useState<StateType>('')
    
    
    useEffect(()=>{
      const matchState=state.find(state=>state.id===parseInt(id))
      setInputArtist(matchState.ArtistName)
      setInputSong(matchState.SongName)
      setInputItioshi(matchState.iPoint)
      setInputDesc(matchState.Desc)
      setImage(matchState.ArtistImage)

      return () =>{
      setInputArtist('')
      setInputSong('')
      setInputItioshi('')
      setInputDesc('')
      setImage('')
      }
    },[])

  

  //新たにコンテントを追加
  const AddNewContent= (e)=>{
    e.preventDefault()

    if(parseInt(id)!==0){
        dispatch({
       type:DELETE_INFO,
       id:parseInt(id)
     })
   }


     const newId=state.length
     
     dispatch({
       type:ADD_CONTENT,
       id:newId,
       ArtistName:inputArtist,
       SongName:inputSong,
       ArtistImage:image,
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

 
 

  return (
    <form className={classes.form} noValidate autoComplete="off">

      <TextForm inputArtist={inputArtist} setInputArtist={setInputArtist}
                inputSong={inputSong} setInputSong={setInputSong}
                image={image} setImage={setImage}
                inputItioshi={inputItioshi} setInputItioshi={setInputItioshi}
                inputDesc={inputDesc} setInputDesc={setInputDesc} />

      <div className={classes.ButtonPlace}>
        <BackButton GoBack={GoBack} />
        <AddButton AddNewContent={AddNewContent} />
      </div>

    </form>


   
  );
  }

export default Article