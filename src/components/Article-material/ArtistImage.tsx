import React,{useState,useRef} from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add';
import AlertDialog from './Dialog'


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



export default function ArtistImage({image,setImage}) {
  const classes = useStyles();
  const ref:any=useRef(null)

  const [openDialog, setOpenDialog] = useState(false)

  //アーチスト画像を追加
  const setArtistImage=e=>{
    if (e.target.files === null) {
     return
   }
   console.log(e.target.files)
  
   const file = e.target.files.item(0)
   if (file === null) {
     return
   }
   var reader = new FileReader()
   reader.readAsDataURL(file)
   reader.onload = () => {
     setImage(reader.result as string)
   }
   //console.log(image)
   }


  //アイコンをclickした時の処理
  const ImageClick = e => {
    if (ref.current) {
      e.preventDefault();
      ref.current.click()
    }
  }
  

  //クリックしたらダイアログがオープン
  const handleDialogOpen=()=>{
    setOpenDialog(true)
  }



  return (
      <>
      <input className={classes.InputAndButton} id='button-file' type="file" accept="image/*"
             ref={ref} onChange={setArtistImage} />

  {image.length>0 
   ? <Avatar  className={classes.avatar} alt="Remy Sharp"   
              src={image} onClick={handleDialogOpen} />
   :  <Fab onClick={ImageClick} aria-label="add" className={classes.avatar}>
        <AddIcon />
      </Fab>
  }
      <AlertDialog setImage={setImage}
                   openDialog={openDialog}
                   setOpenDialog={setOpenDialog}
                   setArtistImage={setArtistImage} />


      </>
  );
}
