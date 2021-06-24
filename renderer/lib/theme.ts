import {createMuiTheme} from '@material-ui/core/styles';
import {COLOR} from "../components/constants";

export const theme = createMuiTheme({
  shape: {
    borderRadius: 20
  },
  overrides:{
    MuiDialogContent:{
      root:{
        backgroundColor: COLOR.ORANGE,
        // color:COLOR.DARK_GREY
      }
    }
  }
});
