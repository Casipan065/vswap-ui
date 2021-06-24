import React from 'react';
import {TextField, Typography, Button, Box, Grid, Dialog, DialogContent, Divider} from "@material-ui/core";
import {COLOR} from "../constants";
import VButton from "../Button";

const ArrowDownFilledTriangle = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                           fill="currentColor" stroke="currentColor" stroke-width="2"
                                           stroke-linecap="round" stroke-linejoin="round"
                                           className="feather feather-chevron-down">
  <polygon points="6 9 12 15 18 9"></polygon>
</svg>;


const SelectCurrency = ({currency, changeCurrency}) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Box onClick={handleClickOpen} width={'30%'} color={COLOR.ORANGE}>
        <Typography>
          {currency}

        </Typography>
        <ArrowDownFilledTriangle/>
      </Box>

      <Dialog onClose={handleClose} open={open}>

        <DialogContent style={{width: '289px'}}>
          <center>

            <Typography>
              Select Token
            </Typography>
          </center>
          <TextField placeholder={'Search name or paste address'} variant={'outlined'}/>

          <center>
            <Typography>
              Most Popular
            </Typography>
          </center>

          <Divider variant={'fullWidth'}/>


          <center>
            <Typography>
              FULL LIST
            </Typography>
          </center>


          <Button>
            MANAGE TOKEN LIST
          </Button>

        </DialogContent>

        <VButton/>
      </Dialog>
    </Box>
  )
}

export default SelectCurrency;