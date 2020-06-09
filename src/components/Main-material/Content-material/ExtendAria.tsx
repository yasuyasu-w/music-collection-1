import React from 'react';
import { makeStyles,createStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const ExtendAria=({expanded,Desc})=>{
    return (
        <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
            説明
         </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                  {Desc}
              </Typography>
        </CardContent>
      </Collapse>
    )
}

export default ExtendAria