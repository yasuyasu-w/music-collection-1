import React from "react"
import AddButton from './Main-material/AddButton'
import Content from './Main-material/Content'
import { makeStyles, createStyles} from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";



const useStyles = makeStyles(() =>
  createStyles({
    root:{
        marginTop:'5%',
        marginRight:'10vw',
        marginLeft: '10vw'
    },
    adBtnPlace:{
      display:'flex',
      justifyContent:'flex-end'
    }
  }),
);

const Main=({state,dispatch})=>{
    const classes = useStyles();
    const history = useHistory();

 

  const NewMakeContent=()=>{
    const newId=state.length
    history.push(`/article/${newId}`)
  }
    

    return(
        <div className={classes.root}>

        {state.map((value,index)=>{return(

        <div key={index} >
        <Content dispatch={dispatch}
                 id={value.id}
                 ArtistName={value.ArtistName} 
                 SongName={value.SongName} 
                 ArtistImage={value.ArtistImage} 
                 iPoint={value.iPoint} 
                 time={value.time}  />
        </div>

        )})}

       <div className={classes.adBtnPlace}>
        <AddButton  NewMakeContent={NewMakeContent} />
       </div>
        </div>
       
    )
}

export default Main