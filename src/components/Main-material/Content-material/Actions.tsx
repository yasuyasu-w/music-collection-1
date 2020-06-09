import React from 'react';
import { makeStyles,createStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

const Actions=({id,time})=>{
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
        <CardActions>
            <div>
                {time}
            </div>
            <Button size="small" color="primary" onClick={()=>EditContent(id)} >
              {id===0 ? '編集できません':'編集する'}
            </Button>
          </CardActions>
    )
}

export default Actions