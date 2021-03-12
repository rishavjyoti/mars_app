import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import back from '../assets/back.jpg';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flex: 'wrap',
    flexGrow: 1,
    margin: 'auto',
    width: '98vw',
    height: '100vh',
  },
  back: {
    backgroundImage: `url(${back})`,
    backgroundSize: 'cover',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#ffffff',
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
                  <Grid container spacing={2}>
                    <Grid item xs={3}/>
                    <Grid item xs={6}>
                      <Typography variant="h3">I would like to die on mars. Just not on impact.</Typography>
                    </Grid>
                    <Grid item xs={3}/>
                    <Grid item xs={7}/>
                    <Grid item xs={3}>
                      <Typography variant="h3">-Elon Musk</Typography>
                    </Grid>
                  </Grid>

                </Paper>
            </div>
        </div>
    )
}