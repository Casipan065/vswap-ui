import React from 'react';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";


const Footer = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        spacing={3}
      >
        <Grid item xs={4}>
          <img src={`images/long_logo.svg`}
               alt={`logo image`}
               height={38}/>

        </Grid>
        <Grid item xs={4}>

        </Grid>
        <Grid item xs={4}>

        </Grid>
      </Grid>
    </Container>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '1rem',
    },

  }),
);

export default Footer;