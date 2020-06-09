import React from 'react';
import { makeStyles,Theme,createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    iconPlace:{
      display:'flex',
      justifyContent:'space-between'
    },
    expand: {
      transform: 'rotate(0deg)',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    }
  })
);

const Actions=({id,time,expanded,setExpanded})=>{
    const classes = useStyles();
    const history = useHistory();

    //編集を押したときの処理
    const EditContent=(selectID)=>{
        if(selectID!==0) {
          history.push(`/article/${selectID}`)
         }else{
           return;
         }
       }

    return (
        <CardActions className={classes.iconPlace} >
          <div>
            <div>
                {time}
            </div>
            <Button size="small" color="primary" onClick={()=>EditContent(id)} >
              {id===0 ? '編集できません':'編集する'}
            </Button>
            </div>
            <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={()=>setExpanded(!expanded)}
          aria-expanded={expanded}
          aria-label="show more"
          >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
    )
}

export default Actions