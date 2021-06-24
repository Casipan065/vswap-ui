import React from 'react';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {COLOR} from "../constants";
import {TextField , Typography, Button, Box, Grid, Card} from "@material-ui/core";
import SelectCurrency from "./SelectCurrency";
import SettingButton from "./SettingButton";
import VButton from "../Button";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginTop: '2rem',
      textAlign: 'center',
      width: '100%',
      // color: 'white',
    },
    swapBox: {
      // margin: theme.spacing(4),
      backgroundColor: COLOR.DARK_GREY,
      // color: 'white',
      height: 466,
      width: 538,
      margin: '0 auto',
      padding: '1rem',
      display: 'flex',
      flexDirection: 'column'
    },
  })
);


const SwapBox = () => {
  const classes = useStyles({});
  const [{inputCurrency, inputValue, outputCurrency, outputValue}, setSwap] = React.useState({
    inputCurrency: 'VSYS', inputValue: '', outputCurrency: '', outputValue: ''
  })

  // return (
  //   <Grid container spacing={1}>
  //     <SettingIcon/>
  //
  //   </Grid>
  // )


  return (
    <div className={classes.container}>
      <Card className={classes.swapBox}>

        <SettingButton/>

        <Box display={'flex'} justifyContent={'flex-start'} color={'white'}>
          <Typography>SWAP</Typography>
        </Box>

        <Box display={'flex'} flexDirection={'row'}>
          <SelectCurrency currency={inputCurrency} changeCurrency={c => setSwap(s => ({...s, inputCurrency: c}))}/>

          <TextField  placeholder={'ENTER AMOUNT'} value={inputValue}/>
        </Box>
        <br/>


        <p>swap icon</p>


        <Box display={'flex'} justifyContent={'flex-start'} p={1} color={'white'}>
          <Typography>FOR</Typography>
        </Box>
        <Box display={'flex'} flexDirection={'row'}>

          <SelectCurrency currency={outputCurrency} changeCurrency={c => setSwap(s => ({...s, outputCurrency: c}))}/>

          <TextField  placeholder={'ENTER AMOUNT'} value={outputValue}/>

        </Box>

        <br/>

        <Button>SWAP</Button>
        <VButton/>
      </Card>
    </div>
  )
}

export default SwapBox;