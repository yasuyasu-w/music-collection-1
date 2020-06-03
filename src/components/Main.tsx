import React from "react"
import AddButton from './Main-material/AddButton'
import Content from './Main-material/Content'
import DeleteButton from './Main-material/DeleteButton'
import { makeStyles, createStyles} from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";



const useStyles = makeStyles(() =>
  createStyles({
    root:{
        marginTop:'5%',
        marginRight:'10vw',
        marginLeft: '10vw'
    },
    array: {
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:'20px'
       
    },
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

        <div key={index} className={classes.array}>
        <Content ArtistName={value.ArtistName} time={value.time} />
        <DeleteButton   />
        </div>

        )})}

        <AddButton  NewMakeContent={NewMakeContent} />
        </div>
       
    )
}

export default Main