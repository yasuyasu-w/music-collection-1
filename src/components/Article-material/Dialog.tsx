import React,{useRef} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const AlertDialog=({setImage,openDialog,setOpenDialog , setArtistImage})=> {
    const ref:any=useRef(null)

  //クリックしたらダイアログを閉じる
  const handleDialogClose=()=>{
    setOpenDialog(false)
  }

  const DeleteImage=()=>{
    setOpenDialog(false)
    setImage('')
  }

   //アイコンをclickした時の処理
   const ImageChangeClick = e => {
    if (ref.current) {
      e.preventDefault();
      setOpenDialog(false)
      ref.current.click()
    }
  }


  return (
    <>
    <input style={{display:'none'}} id='button-file' type="file" accept="image/*"
             ref={ref} onChange={setArtistImage} />
      <Dialog
        open={openDialog}
        onClose={handleDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">画像をどうしますか？</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           変更:画像を変更します
           削除:画像を削除します
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={DeleteImage} color="primary">
            削除
          </Button>
          <Button onClick={ImageChangeClick} color="primary" autoFocus>
            変更
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default  AlertDialog
