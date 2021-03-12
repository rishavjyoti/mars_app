import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import back from '../assets/back.jpg';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flex: 'wrap',
    flexGrow: 1,
    margin: theme.spacing(1),
    width: '98vw',
    height: '100vh',
  },
  back: {
    backgroundImage: `url(${back})`,
    backgroundSize: 'cover',

    height: '100%',
    width: '100%',
  }
}));


export default function Homepage(){
    const classes = useStyles();

    return (
        <div>
            <div className={classes.root}>
                <Paper className={classes.back} elevation={3}>
                    <Typography variant="h3">I would like to die on mars. Just not on impact.</Typography>
                    <Typography variant="h3">-Elon Musk</Typography>
                </Paper>
            </div>
        </div>
    )
}