import { createMuiTheme } from 'material-ui/styles';
import blueGrey from 'material-ui/colors/blueGrey';
import yellow from 'material-ui/colors/yellow';

const templateStandard = {
  palette: {
    primary: blueGrey,
    secondary: yellow,
  },
};

const mainTheme = createMuiTheme(templateStandard);

export default mainTheme;
