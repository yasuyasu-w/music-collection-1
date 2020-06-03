import React from "react"
import AddButton from './Main-material/AddButton'
import Content from './Main-material/Content'
import DeleteButton from './Main-material/DeleteButton'
import { makeStyles, createStyles} from '@material-ui/core/styles';



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
       
    },
  }),
);

const Main=({state,dispatch})=>{
    const classes = useStyles();
    

    return(
        <div className={classes.root}>

        {state.map((value,index)=>{return(

        <div key={index} className={classes.array}>
        <Content id={value.id} time={value.time} />
        <DeleteButton  />
        </div>

        )})}

        <AddButton state={state}  />
        </div>
       
    )
}

export default Main