import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import Link from '../../Link'

const routers = [
  {label: 'SWAP', href: 'swap'},
  {label: 'BUY', href: 'buy'},
  {label: 'POOLS', href: 'pools'},
  {label: 'CHARTS', href: 'charts'},
  {label: 'DOWNLOAD', href: 'download'},
];


const Header = () => {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={3}>
          <img src={`images/long_logo.svg`}
               alt={`logo image`}
               height={65}/>

        </Grid>
        <Grid item xs={6}  style={{textAlign:'center'}}>
          {
            routers.map(({href, label}) => {
              return <Link key={href} className={classes.link} href={href}> {label}</Link>
            })
          }
        </Grid>
        <Grid item xs={3} style={{textAlign:'end'}}>
          <Button variant="contained">CONNECT TO WALLET</Button>
        </Grid>

      </Grid>
    </div>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // flexGrow: 1,
      padding: '1rem'
    },
    link: {
      padding: '1rem'
    }
  }),
);

export default Header;