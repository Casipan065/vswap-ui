import React from 'react';
import Head from 'next/head';
import {Theme, makeStyles, createStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import Link from '../components/Link';
import {COLOR} from '../components/constants'
import SwapBox from '../components/SwapBox'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: 'center',
      padding: theme.spacing(4),
      backgroundColor: COLOR.GREY,
      color: 'white'
    },
  })
);

function Index() {
  const classes = useStyles({});

  return <React.Fragment>
    <Head>
      <title>VSWAP</title>
    </Head>
    <div className={classes.root}>

      <Typography variant="h4">No better way to swap, But with VSWAP</Typography>
      <br/>
      <Typography>
        OK, this one is pretty simple. Here you can't mess up.
        Pick first option, pick second option.
      </Typography>
      <Typography>
        Enter one of the amountsand tadaaaaa. It's done!
      </Typography>

      <SwapBox/>
    </div>
  </React.Fragment>
}

function Index2() {
  const classes = useStyles({});
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleClick = () => setOpen(true);

  return (
    <React.Fragment>
      <Head>
        <title>V SWAP</title>
      </Head>
      <div className={classes.root}>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Super Secret Password</DialogTitle>
          <DialogContent>
            <DialogContentText>1-2-3-4-5</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={handleClose}>
              OK
            </Button>
          </DialogActions>
        </Dialog>
        <Typography variant="h4" gutterBottom>
          Material-UI
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          with Nextron
        </Typography>
        {/*<img src="/images/logo.png" />*/}
        <Typography gutterBottom>
          <Link href="/next">Go to the next page</Link>
        </Typography>
        <Button variant="contained" color="secondary" onClick={handleClick}>
          Super Secret Password
        </Button>
      </div>
    </React.Fragment>
  );
};

export default Index;
